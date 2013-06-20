class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :lockable

  attr_accessible :email, :password, :password_confirmation, :remember_me

  has_many :statements
end
