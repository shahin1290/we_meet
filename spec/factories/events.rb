FactoryBot.define do
  factory :event do
    title { "EventName" }
    date { "2019-12-12" }
    description { "Description for event" }
    location { "Location for event" }
    date_and_time { "29 Feb-5 Pm" }
    group
  end
end
