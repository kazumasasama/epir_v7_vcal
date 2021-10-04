Rails.application.routes.draw do
  resources :customers, only: [:index, :create, :show]

  namespace :api do
    resources :customers, only: [:index, :create, :show]
  end
end
