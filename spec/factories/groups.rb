FactoryBot.define do
  factory :group do
    name { "GroupName" }
    description { "GroupDescription" }
    location { "GroupLocation" }
    association :organizer, factory: :user
    category
  end
end
