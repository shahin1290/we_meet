# frozen_string_literal: true

describe 'GET /groups/:id/events' do
  let!(:group_1) { create(:group) } 
  let!(:group_2) { create(:group) } 

  let!(:events) do 
    3.times { create(:event, group: group_1) }
    3.times { create(:event, group: group_2) }
  end

  before do
    get "/groups/#{group_1.id}/events", headers: headers
  end

  it 'lists events belonging to the group' do
    ids_list = group_1.events.map(&:group_id)
    expect(ids_list).not_to include group_2.id
  end

  it 'returns 200' do 
    expect(response).to have_http_status(200)
  end

  it 'returns a event title' do 
    expect(response_json['events'][0]['title']).not_to be nil
  end

   it 'returns a valid image url' do 
    expect(response_json['events'][0]['image_url']).not_to be nil
  end

  it 'returns 3 events' do
    expect(response_json['events'].count).to eq 3
  end
end