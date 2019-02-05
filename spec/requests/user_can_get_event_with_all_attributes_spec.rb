# frozen_string_literal: true

describe 'GET/events' do
  describe 'GET event with all the attributes' do
    let(:user) { create(:user) }
    let!(:group) { create(:group, name:'My awesome group') }

    let(:user_credentials) { user.create_new_auth_token }
    let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }
    let!(:event) do
      create(:event, title: 'Craft Academy',
                     description: 'Graduation Party',
                     location: 'Stockholm',
                     date: '2019-12-12',
                     time: '12:12',
                     group: group)
    end

    before do
      get '/events'
    end

    it 'returns the title' do
      expect(response_json['events'][0]['title']).to eq 'Craft Academy'
    end

    it 'returns the description' do
      expect(response_json['events'][0]['description']).to eq 'Graduation Party'
    end

    it 'returns the location' do
      expect(response_json['events'][0]['location']).to eq 'Stockholm'
    end

    it 'returns the date' do
      expect(response_json['events'][0]['date']).to eq '2019-12-12'
    end

    it 'returns the time in short format' do
      expect(response_json['events'][0]['time']).to eq '12:12'
    end

    it 'returns the group info' do
      expect(response_json['events'][0]['group']['name']).to eq 'My awesome group'
    end
  end
end
