describe 'GET /notifications/send_email' do
  let!(:user_1) { create(:user, email: 'bill@mail.com') }
  let!(:user_2) { create(:user, email: 'jill@mail.com') }
  let!(:user_3) { create(:user, email: 'Mill@mail.com') }
  let!(:user_4) { create(:user, email: 'Kill@mail.com') }

  let(:user) { create(:user, email: 'jon@mail.com') }

  let!(:group_1) { create(:group, name: 'Meeting') } 
  let!(:group_2) { create(:group, name: 'Eating') } 

  let!(:member1) { create(:membership, group: group_1, user: user_1) } 
  let!(:member2) { create(:membership, group: group_1, user: user_2) }

  let!(:member3) { create(:membership, group: group_2, user: user_3) } 
  let!(:member4) { create(:membership, group: group_2, user: user_4) }

  let(:user_credentials) { user.create_new_auth_token }
  let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }

  before do
    get "/send_mail/#{group_1.id}", headers: headers
  end

  it 'renders the receiver email' do
    expect(ActionMailer::Base.deliveries[0].to).to include(user_1.email)
    expect(ActionMailer::Base.deliveries[0].to).not_to include(user_4.email)
  end

  it 'renders the sender email' do
    expect(ActionMailer::Base.deliveries[0].from).to include(user.email)
  end

  it 'responds with success message' do
    expect(response_json['message']).to eq 'Notifications sent successfully'
  end

  it 'renders the subject' do
    expect(ActionMailer::Base.deliveries[0].subject).to eq('Notification from WeMeet')
  end

  it 'renders the body' do
    expect(ActionMailer::Base.deliveries[0].body).to include('Thanks for joining the group')
  end

end





   

