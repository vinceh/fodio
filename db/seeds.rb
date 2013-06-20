newuser = Admin.new({ :email => 'admin@fodio.com',
                      :password => 'fodioapp1',
                      :password_confirmation => 'fodioapp1'})
newuser.save!