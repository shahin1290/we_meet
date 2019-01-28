# frozen_string_literal: true

describe 'POST /events/:id/attendees' do
  let(:user) { create(:user) }
  let(:event) { create(:event) }
  let(:user_credentials) { user.create_new_auth_token }
  let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }

  before do
    post "/events/#{event.id}/attendees", headers: headers, params: { user_id: user.id }
  end

  it 'adds user to list of attendees for event' do
    expect(event.attendees).to include user.id
  end
end
