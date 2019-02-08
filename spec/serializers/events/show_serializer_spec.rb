# frozen_string_literal: true

describe Events::ShowSerializer, type: :serializer do
  let(:sample) { create(:event) }
  let!(:users) { 3.times { create(:user)} }
  let(:serialization) { described_class.new(sample) }
  subject { JSON.parse(serialization.to_json) }

  before do
    users = User.all
    users.each do | user |
      user.rsvps.create(event: sample)
    end
    sample.save
  end

  it 'contains relevant keys' do
    expected_keys = %w[id title date time description location image_url group attendees ]
    expect(subject.keys).to match expected_keys
  end
end