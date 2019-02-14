Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }

  root 'homes#index'

  resources :game, controller: 'lobbies', only: [:show]

  namespace 'api' do
    namespace 'v1' do
      resources :lobbies, only: [:index] do
        resources :chat, controller: 'messages', only: [:index]
      end
      get 'users/current', to: 'users#current'
    end
  end

end
