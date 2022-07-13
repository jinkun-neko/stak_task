Rails.application.routes.draw do
  # root to: 'home#index'


  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
    if Rails.env.development?
      mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "graphql#execute"
    end
    post "/graphql", to: "graphql#execute"
end
