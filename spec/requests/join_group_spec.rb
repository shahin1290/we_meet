# frozen_string_literal: true

describe 'POST /groups/:id/members' do
  let(:user) { create(:user) }
  let(:group) { create(:group) }

  describe 'POST req with valid credentials' do
    let(:user_credentials) { user.create_new_auth_token }
    let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }
    
    before do
      post "/groups/#{group.id}/members", headers: headers
    end

    it 'adds user to list of members for group' do
      members = event.members.map(&:user)
      expect(members).to include user
    end

    it 'responds with success message' do
      expect(response_json['message']).to eq 'You are now a member'
    end

    it 'responds with status 200' do
      expect(response).to have_http_status 200
    end
  end
end


