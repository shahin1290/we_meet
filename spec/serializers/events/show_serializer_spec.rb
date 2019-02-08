# frozen_string_literal: true

describe Events::ShowSerializer, type: :serializer do
  let(:sample) { create(:event) }
  let!(:users) { 3.times { create(:user)} }
  let(:serialization) { described_class.new(sample) }
  subject { JSON.parse(serialization.to_json) }

  before do
    
    users = User.all
    binding.pry

    users.each do | faraz |
      sample.attendees.push(faraz)

    end
    sample.save
  end

  it 'contains relevant keys' do
    expected_keys = %w[id title date time description location group attendees]

    expect(subject.keys).to match expected_keys
  end
end