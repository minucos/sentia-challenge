Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  resources :people, only: [:index], defaults: { format: :json } do
    post :upload, on: :collection
    delete :destroy_all, on: :collection
  end
end
