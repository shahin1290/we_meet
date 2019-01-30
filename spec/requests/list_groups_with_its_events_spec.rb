# frozen_string_literal: true

describe 'GET /groups/:id' do
  let!(:group_1) { create(:group) } 
  let!(:group_2) { create(:group) } 

  let!(:events) do 
    3.times { create(:event, group: group_1, date: 1.day.from_now) }
    3.times { create(:event, group: group_2) }
  end

  before do
    get "/groups/#{group_1.id}", headers: headers
  end

  it 'lists events belonging to the group' do
    ids_list = group_1.events.map(&:group_id)
    expect(ids_list).not_to include group_2.id
  end

  it 'returns 200' do 
    expect(response).to have_http_status(200)
  end

  it 'returns 3 future events' do
    expect(response_json['group']['events'].count).to eq 3
  end
end