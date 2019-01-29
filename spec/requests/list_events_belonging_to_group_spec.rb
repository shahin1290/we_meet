# frozen_string_literal: true

describe 'GET /groups/:id/events' do
  let!(:events) { 3.times { create(:event) } }
  let!(:group) { create(:group) } 

  before do
    get "/groups/#{group.id}/events", headers: headers
  end

  it 'adds events to the group' do
    events_list = group.events.map(&:events)
    expect(events_list).to include events
  end

  it 'returns 200' do 
    expect(response).to have_http_status(200)
  end

  it 'returns 3 events' do
    expect(response_json['group']['events'].count).to eq 3
  end
end