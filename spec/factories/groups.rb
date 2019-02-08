# frozen_string_literal: true

FactoryBot.define do
  factory :group do
    name { 'GroupName' }
    description { 'GroupDescription' }
    location { 'GroupLocation' }
    category
    association :organizer, factory: :user

    after(:build) do |group|
      file_path = Rails.root.join('spec', 'fixtures', 'basic_image.png')
      file = fixture_file_upload(file_path, 'image/png')
      group.image.attach(file)
    end
  end
end

# /Users/thomas_ochman/Projects/we_meet/spec/fixtures/basic_image.png
