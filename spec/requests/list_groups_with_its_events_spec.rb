# frozen_string_literal: true

describe 'GET /groups/:id' do
  let!(:group_1) { create(:group) } 
  let!(:group_2) { create(:group) } 

  let!(:events) do 
    3.times { create(:event, group: group_1, date: 1.day.from_now) }
    3.times { create(:event, group: group_1, date: 1.day.ago) }
    3.times { create(:event, group: group_2, date: 1.day.from_now) }
    3.times { create(:event, group: group_2, date: 1.day.ago) }
  end

  before do
    get "/groups/#{group_1.id}", headers: headers
  end

  it 'returns 200' do 
    expect(response).to have_http_status(200)
  end

  it 'returns a group name' do 
    expect(response_json['group']['name']).not_to be nil
  end

  it 'returns a valid image url' do 
    # TODO: We should test if the link is a valid url. 
    expect(response_json['group']['image_url']).not_to be nil
  end

  it 'returns 3 future events' do
    expect(response_json['group']['future_events'].count).to eq 3
  end

  it 'returns 3 past events' do
    expect(response_json['group']['past_events'].count).to eq 3
  end
end