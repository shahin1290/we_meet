describe 'POST /groups/:group_id/notifications' do
  let!(:users) { create_list(:user, 4) }
  let!(:group) { create(:group, organizer: users[0]) } 
  let!(:member1) { create(:membership, group: group, user: users[1]) } 
  let!(:member2) { create(:membership, group: group, user: users[2]) }

  describe 'POST req when user is the organizer' do
    let(:user_credentials) { users[0].create_new_auth_token }
    let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }
    let(:mail_delivery){ ActionMailer::Base.deliveries[0] }
    
    before do
      post "/groups/#{group.id}/notifications", headers: headers
    end

    it 'sends the email only to the specific group members' do
      expect(mail_delivery.to).to include(users[1].email)
      expect(mail_delivery.to).not_to include(users[0].email)
    end

    it 'shows the email address of the sender' do
      expect(mail_delivery.from).to include('noreply@wemeet.com')
    end

    it 'responds with success message' do
      expect(response_json['message']).to eq 'Notifications was successfully sent to 2 group members'
    end

    it 'renders the subject' do
      expect(mail_delivery.subject).to include('Notification from WeMeet')
    end

    it 'renders the body' do
      expect(mail_delivery.body).to include('Thanks for joining the group')
    end

  end
  
  describe 'POST req when user is not the organizer' do
    let(:user_credentials) { users[3].create_new_auth_token }
    let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }
    let(:mail_delivery){ ActionMailer::Base.deliveries[0] }
    
    before do
      post "/groups/#{group.id}/notifications", headers: headers
    end

    it 'responds with error message' do
      expect(response_json['error']).to eq 'You must be an organizer to send an email'
    end

    it 'returns 403' do
      expect(response).to have_http_status(403)
    end
  end
end