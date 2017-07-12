Rails.application.routes.draw do
  get 'welcome/index'
  root "welcome#index"

  post "/lists/:list_id/foods" => "foods#create"

  namespace :api do
    resources :users do
      resources :lists
    end
  end

  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
