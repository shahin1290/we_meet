# frozen_string_literal: true

RSpec.describe Event, type: :model do
  describe 'DB table' do
    it { is_expected.to have_db_column :title }
  end

  describe 'Validations' do
    it { is_expected.to validate_presence_of :title }
  end

  describe 'Associations' do
    it { is_expected.to have_many :attendee_list }
  end

  describe 'Factory' do
    it 'is valid' do
      expect(create(:event)).to be_valid
    end
  end
end
