describe UserMailer, type: :mailer do
  describe 'instructions' do
    let(:user) { create(:user, email: 'email@email.com', name: 'Bill') }
    let(:mail) { described_class.welcome_email(user).deliver_now }

    it 'renders the subject' do
      expect(mail.subject).to eq('Welcome to My Awesome Site')
    end

    it 'renders the receiver email' do
      expect(mail.to).to eq([user.email])
    end

    it 'renders the sender email' do
      expect(mail.from).to eq(['from@example.com'])
    end

    it 'assigns @name' do
      expect(mail.body.encoded).to match(user.name)
    end
  end
end