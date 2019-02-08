# frozen_string_literal: true

describe User, type: :model do

  describe 'DB table' do
    it { is_expected.to have_db_column :id }
    it { is_expected.to have_db_column :email }
    it { is_expected.to have_db_column :encrypted_password }
    it { is_expected.to have_db_column :provider }
  end


  describe 'Associations' do
    it { is_expected.to have_many :rsvps }
    it { is_expected.to have_many :memberships }
    it { is_expected.to have_many(:groups).through(:memberships) }
  end

  describe 'Factory' do
    it 'is valid' do
      expect(create(:user)).to be_valid
    end
  end

  describe '#organized_groups' do
    let!(:group){ create(:group, organizer: subject) }

    subject { create(:user) }

    it 'includes the group' do
      ids = subject.organized_groups.map(&:id)
      expect(ids).to include group.id
    end
  end

  describe 'Image attachment' do
    let!(:image) { File.open(fixture_path + '/basic_image.png') }

    it 'can be attached to user profile' do
      subject.image.attach(io: image,
                           filename: 'attachment_1.png',
                           content_type: 'image/png')
      expect(subject.image).to be_attached
    end
  end
end