# frozen_string_literal: true

Rails.application.routes.draw do
  get 'memberships/create'
  mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks]
  
  resources :events, only: [:index] do
    resources :attendees, only: [:create]
  end

  resources :groups, only: [:index] do
    resources :memberships, only: [:create]
  end
  
end
