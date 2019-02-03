# frozen_string_literal: true

describe 'GET /cagegories/:id/groups' do
  let!(:category_1) { create(:category) } 
  let!(:category_2) { create(:category) } 

  let!(:group) do 
    3.times { create(:group, category: category_1) }
    3.times { create(:group, category: category_2) }
  end

  before do
    get "/categories/#{category_1.id}/groups", headers: headers
  end

  it 'lists groups belonging to the categories' do
    ids_list = category_1.groups.map(&:category.id)
    expect(ids_list).not_to include category_2.id
  end

  it 'returns 200' do 
    expect(response).to have_http_status(200)
  end

  it 'returns 3 groups' do
    expect(response_json['groups'].count).to eq 3
  end
end