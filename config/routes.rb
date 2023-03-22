Rails.application.routes.draw do
  root :to => 'index#index'
  
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  get '/all-supplements', to: 'supplements#show_all'
  resources :supplements, only: [:index, :show, :create, :destroy]

  resources :orders
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


# Write a custom route that sets a number as a bar for which we will find 
# all the orders that have quantity less than that number. 
# So if you give the parameter 4 you will find all orders that have less than 4 as the quantity attribute. 
# Return json of all the orders. 
# If no orders meet this requirement return suitable json that says that.