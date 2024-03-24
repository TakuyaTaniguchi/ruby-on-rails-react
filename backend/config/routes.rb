Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :groups
  # resources :users do
  #   resources :memos
  #   get 'me', on: :collection
  # end
  resources :memos
  get "up" => "rails/health#show", as: :rails_health_check
end
