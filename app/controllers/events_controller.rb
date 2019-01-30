class EventsController < ApplicationController
  def index
    if params[:group_id]
      events = Event.where(group_id: params[:group_id])
    else
      events = Event.all
    end
    render json: events, each_serializer: Events::IndexSerializer
  end
end
