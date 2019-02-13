require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    color { 'FF0000' }
  end

  factory :lobby do
    sequence(:name) {|n| "Lobby #{n}"}
  end

  factory :message do
    sequence(:body) { |n| "#{n} Mississippi" }
    association :user
    association :lobby
  end
end
