# frozen_string_literal: true

describe Category, type: :model do

  describe 'DB table' do
    it { is_expected.to have_db_column :name }
  end

  describe 'Associations' do
    it { is_expected.to have_many :groups }
  end

  describe 'Validations' do
    it { is_expected.to validate_presence_of :name }
  end

  describe 'Factory' do
    it 'is valid' do
      expect(create(:category)).to be_valid
    end
  end
end
