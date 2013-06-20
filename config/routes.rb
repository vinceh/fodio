Fodio::Application.routes.draw do
  devise_for :users
  devise_for :admins

  root :to => 'home#index'

  devise_for :admins do
    get 'controlpanel', :to => 'admins#controlpanel', :as => :admin_root
  end

  # API
  get 'statements/:id' => 'home#get_statement'
  post 'statements/save' => 'home#save_statement'
end
