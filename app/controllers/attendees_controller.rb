class AttendeesController < ApplicationController
  def create
    user = User.find(params[:user_id])
    event = Event.find(params[:event_id])
    event.attendees << user
    event.save
    render json: { message: 'Your RSVP was successfylly processed'}
  end
end
