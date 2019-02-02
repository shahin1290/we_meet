describe 'GET /notifications/send_email' do
  let!(:user_1) { create(:user, email: 'bill@mail.com') }
  let!(:user_2) { create(:user, email: 'jill@mail.com') }

  let(:user) { create(:user) }

  let!(:group) { create(:group) } 
  # let!(:event) { create(:event, group: group)}

  let(:user_credentials) { user.create_new_auth_token }
  let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }

  let!(:member1) { create(:membership, group: group, user: user_1) } 
  let!(:member2) { create(:membership, group: group, user: user_2) }

  before do
    get "/send_mail/#{group.id}", headers: headers
  end

  it 'renders the receiver email' do
    expect(ActionMailer::Base.deliveries[0].to).to include(user_1.email)
  end
end

# describe UserMailer, type: :mailer do
#   describe 'instructions' do
#     let(:user) { create(:user, email: 'email@email.com', name: 'Bill') }
#     let(:mail) { described_class.welcome_email(user).deliver_now }

#     it 'renders the subject' do
#       expect(mail.subject).to eq('Welcome to My Awesome Site')
#     end

#     it 'renders the receiver email' do
#       expect(mail.to).to eq([user.email])
#     end

#     it 'renders the sender email' do
#       expect(mail.from).to eq(['from@example.com'])
#     end

#     it 'assigns @name' do
#       expect(mail.body.encoded).to match(user.name)
#     end
#   end
# end



   

