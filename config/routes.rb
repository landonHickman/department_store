Rails.application.routes.draw do
  root "departments#index"

resources :departments do
  resources :items
  end

resources :items do
  resources :reviews
  end
end
# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
