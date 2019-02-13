Rails.application.routes.draw do
  devise_for :users

  root 'homes#index'

  resources :game, controller: 'lobbies'

  namespace 'api' do
    namespace 'v1' do
      resources :lobbies, only: [:index]
    end
  end

end
