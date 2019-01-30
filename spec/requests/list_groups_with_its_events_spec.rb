# frozen_string_literal: true

describe 'GET /groups/:id' do
  let!(:group) { create(:group) } 
  let!(:events) { 3.times { create(:event, group: group) } }

  before do
    get "/groups/#{group.id}", headers: headers
  end

  xit 'lists events belonging to the group' do
    ids_list = group_1.events.map(&:group_id)
    expect(ids_list).not_to include group_2.id
  end

  it 'returns 200' do 
    expect(response).to have_http_status(200)
  end

  it 'returns 3 events' do
    binding.pry
    expect(response_json['group']['events'].count).to eq 3
  end
end