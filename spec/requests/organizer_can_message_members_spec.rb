describe 'GET /notifications/send_email' do
  let!(:users) { create_list(:user, 3) }
  let!(:group) { create(:group) } 
  let!(:member1) { create(:membership, group: group, user: users[1]) } 
  let!(:member2) { create(:membership, group: group, user: users[2]) }

  describe 'GET req with valid credentials' do
    let(:user_credentials) { users[0].create_new_auth_token }
    let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }
    let(:mail_delivery){ ActionMailer::Base.deliveries[0] }
    
    before do
      get "/send_mail/#{group.id}", headers: headers
    end

    it 'renders the receiver email' do
      expect(mail_delivery.to).to include(users[1].email)
      expect(mail_delivery.to).to include(users[2].email)
      expect(mail_delivery.to).not_to include(users[0].email)
    end

    it 'renders the sender email' do
      expect(mail_delivery.from).to include('noreply@meetup.com')
    end

    it 'responds with success message' do
      expect(response_json['message']).to eq 'Notifications sent successfully'
    end

    it 'renders the subject' do
      expect(mail_delivery.subject).to include('Notification from WeMeet')
    end

    it 'renders the body' do
      expect(mail_delivery.body).to include('Thanks for joining the group')
    end

  end
end





   

