# frozen_string_literal: true

class AttendeesController < ApplicationController
  before_action :authenticate_user!

  def create
    event = Event.find(params[:event_id])
    event.attendees.create(user: current_user)
    render json: { message: 'Your RSVP was successfylly processed' }
  end
end
