class Category < ActiveRecord::Base

  # TODO
  has_attached_file 	:icon,
                      :storage => :s3,
                      :default_url => ActionController::Base.helpers.asset_path("rails.png"),
                      :bucket => 'fodio',
                      :s3_credentials => {
                        :access_key_id => 'AKIAI576XAU7SH57QZFA',
                        :secret_access_key => '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'
                      },
                      :path => "/:attachment/:style/:id.:extension",
                      :styles => {
                        :thumb => ["200x200"]
                      }


  attr_accessible :user_id, :name

  has_many :statements
end