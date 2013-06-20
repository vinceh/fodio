class Action < ActiveRecord::Base

  attr_accessible :statement_id, :content

  belongs_to :statement
end