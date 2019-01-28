# frozen_string_literal: true

describe Events::IndexSerializer, type: :serializer do
  let(:sample) { create(:event) }
  subject { described_class.new(sample) }

  it 'contains relevant keys' do
    expected_keys = %i[id title]
    expect(subject.attributes.keys).to match expected_keys
  end
end
