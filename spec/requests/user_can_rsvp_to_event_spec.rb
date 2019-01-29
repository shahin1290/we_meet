# frozen_string_literal: true

describe 'POST /events/:id/attendees' do
  let(:user) { create(:user) }
  let(:event) { create(:event) }

  describe 'POST req with valid credentials' do
    let(:user_credentials) { user.create_new_auth_token }
    let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }
    
    before do
      post "/events/#{event.id}/attendees", headers: headers
    end

    it 'adds user to list of attendees for event' do
      attendees = event.attendees.map(&:user)
      expect(attendees).to include user
    end

    it 'responds with success message' do
      expect(response_json['message']).to eq 'Your RSVP was successfylly processed'
    end

    it 'responds with status 200' do
      expect(response).to have_http_status 200
    end

  end

  describe 'POST req with invalid credentials (no user is logged in on the client)' do 
    let(:invalid_headers) { { HTTP_ACCEPT: 'application/json' } }

    before do
      post "/events/#{event.id}/attendees", headers: invalid_headers
    end

    it 'responds with error message' do
      expect(response_json['errors']).to include 'You need to sign in or sign up before continuing.'
    end

    it 'responds with status 401' do
      expect(response).to have_http_status 401
    end

  end
end
