Rails.application.routes.draw do
  get 'events/index'
  resources :events, only: [:index]
end
