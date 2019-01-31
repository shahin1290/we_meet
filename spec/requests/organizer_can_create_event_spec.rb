describe 'POST /events' do
  let(:user) { create(:user) }
  let!(:group) { create(:group) } 

  let!(:events) do 
    3.times { create(:event, group: group) }
  end

  describe 'POST req with valid credentials' do
    let(:user_credentials) { user.create_new_auth_token }
    let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }
    
    before do
      post "/groups/#{group.id}/events", params: { event: {title: 'Craft Academy'} }, headers: headers
    end

    it 'responds with success message' do
      expect(response_json['message']).to eq 'You have created an event successfully'
    end

    it 'responds with status 200' do
      expect(response).to have_http_status 200
    end
  end
end