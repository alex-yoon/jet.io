Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }

  root 'homes#index'

  resources :game, controller: 'lobbies'

  namespace 'api' do
    namespace 'v1' do
      resources :lobbies, only: [:index] do
        resources :messages, only: [:index]
      end
    end
  end

end
