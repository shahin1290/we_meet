# frozen_string_literal: true

describe 'POST /events/:id/attendees' do
  let(:user) { create(:user) }
  let(:event) { create(:event) }
  let(:user_credentials) { user.create_new_auth_token }
  let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }

  before do
    post "/events/#{event.id}/attendees", headers: headers
  end

  it 'adds user to list of attendees for event' do
    attendees = event.attendee_list.map(&:user)
    expect(attendees).to include user
  end

  it 'responds with success message' do 
    expect(JSON.parse(response.body)['message']).to eq 'Your RSVP was successfylly processed'
  end
end
