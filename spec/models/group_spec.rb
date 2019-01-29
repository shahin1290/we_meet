# frozen_string_literal: true

RSpec.describe Group, type: :model do
  describe 'DB table' do
    it { is_expected.to have_db_column :name }
  end

  describe 'Validations' do
    it { is_expected.to validate_presence_of :name }
  end

  describe 'Associations' do
    it { is_expected.to have_many :members }
    it { is_expected.to have_many :events }
  end

  describe 'Factory' do
    it 'is valid' do
      expect(create(:group)).to be_valid
    end
  end
end