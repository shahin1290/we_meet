# frozen_string_literal: true

describe 'GET /events' do
  it 'list collection of events' do
    get '/events'
    expect(JSON.parse(response.body)).not_to eq nil
  end
end
