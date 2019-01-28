# frozen_string_literal: true

describe 'GET /events' do
  let!(:events) { 3.times { create(:event) } }

  before do
    get '/events'
  end

  it 'returns 200' do 
    expect(response).to have_http_status(200)
  end

  it 'returns 3 events' do
    expect(response_json['events'].count).to eq 3
  end
end
