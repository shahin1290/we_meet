# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks]
  resources :events, only: [:index] do
    resources :attendees, only: [:create]
  end
end
