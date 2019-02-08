FactoryBot.define do
  factory :event do
    title { 'EventName' }
    date { '2019-12-12' }
    description { 'Description for event' }
    location { 'Location for event' }
    time { '12:12:12' }
    group

    after(:build) do |event|
      file_path = Rails.root.join('spec', 'fixtures', 'basic_image.png')
      file = fixture_file_upload(file_path, 'image/png')
      event.image.attach(file)
    end
  end
end
