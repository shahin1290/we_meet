
describe Categories::ShowSerializer, type: :serializer do
  let(:sample) { create(:category) }
  let(:serialization) { described_class.new(sample) }
  subject { JSON.parse(serialization.to_json) }

  it 'contains relevant keys' do
    expected_keys = %w[id name groups]
    expect(subject.keys).to match expected_keys
  end
end
