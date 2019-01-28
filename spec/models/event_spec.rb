require 'rails_helper'

RSpec.describe Event, type: :model do
  describe 'DB table' do
    it { is_expected.to have_db_column :title }
  end

  describe 'Factory' do
    it 'is valid' do
      expect(create(:event)).to be_valid
    end
  end
end
