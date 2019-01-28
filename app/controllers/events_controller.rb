class EventsController < ApplicationController
  def index
    events = Event.all
    render json: events, each_serializer: Events::IndexSerializer
  end
end
