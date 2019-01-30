# frozen_string_literal: true

describe Groups::ShowSerializer, type: :serializer do
  let(:sample) { create(:group) }
  let!(:events) do
    3.times { create(:event, group: sample, date: 1.day.from_now) }
    3.times { create(:event, group: sample, date: 1.day.ago) }
  end
  subject { described_class.new(sample) }

  it 'contains relevant keys' do
    expected_keys = %i[id name]
    expect(subject.attributes.keys).to match expected_keys
  end
end
