Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :groups
  resources :users
  # resources :users do
  #   resources :memos
  #   get 'me', on: :collection
  # end
  resources :memos
  get "up" => "rails/health#show", as: :rails_health_check
end
