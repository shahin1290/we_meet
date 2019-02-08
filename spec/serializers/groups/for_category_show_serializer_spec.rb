
describe Groups::ForCategoryShowSerializer, type: :serializer do
  let(:sample) { create(:group) }
  let(:serialization) { described_class.new(sample) }
  subject { JSON.parse(serialization.to_json) }

  it 'contains relevant keys' do
    expected_keys = %w[id name image_url]
    expect(subject.keys).to match expected_keys
  end
end
