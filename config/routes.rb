Rails.application.routes.draw do
  get 'welcome/index'
  root "welcome#index"
  get "/search/:search" => "recipes#fetch_recipe"
  get "/recipe/:recipe" => "recipe#show_recipe"
  post "/lists/:list_id/foods" => "foods#create"

  
  namespace :api do
    resources :users do
      resources :lists
    end
    resources :lists, only: [] do
      resources :foods
    end
  end

  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
