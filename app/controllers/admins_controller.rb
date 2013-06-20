class AdminsController < ApplicationController

  def controlpanel
    @users = User.all
  end
end