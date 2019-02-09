# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth',
                                      skip: [:omniauth_callbacks],
                                      controllers: {
                                        sessions: :sessions,
                                        registrations: :registrations
                                      }

  resources :events, only: %i[index show] do
    resources :attendees, only: [:create]
  end

  resources :categories, only: %i[index show]

  resources :groups, only: %i[index show create] do
    resources :notifications, only: [:create]
    resources :memberships, only: [:create]
    resources :events, only: %i[index create]
  end
end
