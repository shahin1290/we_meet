# frozen_string_literal: true

describe Membership, type: :model do
  describe 'DB table' do
    it { is_expected.to have_db_column :id }
    it { is_expected.to have_db_column :group_id }
    it { is_expected.to have_db_column :user_id }
  end


  describe 'Associations' do
    it { is_expected.to belong_to :user }
    it { is_expected.to belong_to :group }
  end

  describe 'Factory' do
    it 'is valid' do
      expect(create(:rsvp)).to be_valid
    end
  end
end
