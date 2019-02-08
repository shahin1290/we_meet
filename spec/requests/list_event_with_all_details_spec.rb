
describe 'GET /events/id' do
  let!(:organizer) { create(:user) }
  let!(:group) {create(:group, organizer: organizer)}
  let!(:event) { create(:event, group: group, date: '2019-12-12', time: '2000-01-01T12:12:12.000Z') }

  let!(:attendee_1){create(:user) }

  describe 'GET req for specific event' do
    let(:user_credentials) { organizer.create_new_auth_token }
    let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }

    before do
      group.members.create(user: attendee_1)
      event.attendees.create(user: attendee_1)
      get "/events/#{event.id}", headers: headers
    end

    it 'returns expected response' do
      expected_response = {
        "event" => {
          "attendees"=>[{
            "name"=>attendee_1.name
          }], 
          "date"=> "2019-12-12", 
          "description"=>event.description, 
          "group"=>{
            "description"=>group.description, 
            "id"=>group.id, 
            "location"=>group.location, 
            "name"=>group.name
          }, 
          "id"=>event.id, 
          "location"=>event.location, 
          "time"=>"2000-01-01T12:12:12.000Z",
          "title"=>event.title
        }
      }

      expect(response_json).to eq expected_response
    end

    it 'returns 200' do
      expect(response).to have_http_status(200)
    end
  end
end 
