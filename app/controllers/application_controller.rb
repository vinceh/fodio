class ApplicationController < ActionController::Base
  protect_from_forgery

  def after_sign_in_path_for(resource)

    # TODO
    if resource.is_a?(Admin)
      admin_root_path
    elsif resource.is_a?(nil)
      admin_root_path
    end
  end
end
