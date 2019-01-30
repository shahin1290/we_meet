# frozen_string_literal: true

describe 'POST /groups' do
  let(:user) { create(:user) }
  let(:group) { create(:group) }

  describe 'POST req with valid credentials' do
    let(:user_credentials) { user.create_new_auth_token }
    let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }
    
    before do
      post "/groups", headers: headers
    end

    it 'responds with success message' do
      expect(response_json['message']).to eq 'You have created a group successfully'
    end

    it 'responds with status 200' do
      expect(response).to have_http_status 200
    end
  end
end

