describe 'GET/events' do

  describe 'GET event with all the attributes' do
    let(:user) { create(:user) }
    let!(:group) { create(:group) } 

    let(:user_credentials) { user.create_new_auth_token }
    let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }
    
    before do
      post "/groups/#{group.id}/events", params: { event: 
                                                  {title: 'Craft Academy',
                                                  description: 'Graduation Party',
                                                  location: 'Stockholm',
                                                  date: '2019-12-12',
                                                  time: '2000-01-01T12:12:12.000Z'
                                                  } }, headers: headers
    
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

      it 'returns the time' do
        expect(response_json['events'][0]['time']).to eq '2000-01-01T12:12:12.000Z'
      end
    end

    describe 'GET list of events' do
      let!(:events) { 3.times { create(:event) } }
    
      before do
        get '/events'
      end
    
      it 'returns 200' do 
        expect(response).to have_http_status(200)
      end
    
      it 'returns 3 events' do
        expect(response_json['events'].count).to eq 3
      end
    end

  end