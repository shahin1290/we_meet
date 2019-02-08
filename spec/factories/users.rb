# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password { 'password' }

    after(:build) do |user|
      file_path = Rails.root.join('spec', 'fixtures', 'basic_image.png')
      file = fixture_file_upload(file_path, 'image/png')
      user.image.attach(file)
    end
  end
end