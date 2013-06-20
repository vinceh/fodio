class Statement < ActiveRecord::Base

  attr_accessible :content, :category_id

  belongs_to :user
  belongs_to :category
  has_many :actions

  def to_json
    returned_actions = []
    actions.each do |a|
      returned_actions << {content: a.content}
    end

    {
      user_id: user.id,
      content: content,
      actions: returned_actions
    }
  end
end