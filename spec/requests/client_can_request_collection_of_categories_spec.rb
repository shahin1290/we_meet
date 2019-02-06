# frozen_string_literal: true

describe 'GET /categories/' do
  let!(:category_1) { create(:category) }
  let!(:category_2) { create(:category) }

  before do
    get '/categories'
  end

  it 'returns 200' do
    expect(response).to have_http_status(200)
  end

  it 'returns 3 groups' do
    expect(response_json['categories'].count).to eq 2
  end
end
