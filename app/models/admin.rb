class Admin < ActiveRecord::Base
  devise :database_authenticatable, :rememberable, :trackable, :lockable

  attr_accessible :email, :password, :password_confirmation, :remember_me
end
