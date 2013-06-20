class HomeController < ApplicationController
  protect_from_forgery

  def get_statement
    user = User.find(params[:id])
    statement = user.statements.order("created_at").first

    unless statement
      statement = Statement.new
      statement.user = user
      statement.category = Category.all.first
    end

    render :json => statement.to_json
  end

  def save_statement
    actions = params[:statement][:actions]
    params[:statement].except!(:actions)

    user = User.find(params[:statement][:user_id])
    params[:statement].except!(:user_id)

    new_statement = Statement.new(params[:statement])
    new_statement.category = Category.all.first
    new_statement.user = user

    if new_statement.save!
      actions.each do |a|
        action = new_statement.create_action(a)
        action.save!
      end
    end
  end
end
