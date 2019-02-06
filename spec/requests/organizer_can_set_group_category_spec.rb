# frozen_string_literal: true

describe 'GET /categories/:id' do
  let!(:category_1) { create(:category) } 
  let!(:category_2) { create(:category) } 

  let!(:group) do 
    3.times { create(:group, category: category_1) }
    3.times { create(:group, category: category_2) }
  end

  before do
    get "/categories/#{category_1.id}", headers: headers
  end

  it 'returns 200' do
    expect(response).to have_http_status(200)
  end

  it 'returns 3 groups' do
    expect(response_json['category']['groups'].count).to eq 3
  end
end