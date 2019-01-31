class EventsController < ApplicationController
  def index
    if params[:group_id]
      events = Event.where(group_id: params[:group_id])
    else
      events = Event.all
    end
    render json: events, each_serializer: Events::IndexSerializer
  end

  def create
    event = Event.new(event_params.merge(group_id: params[:group_id]))
    if event.save
      
      render json: { message: 'You have created an event successfully' }
    else
      render json: { error: event.errors.full_messages }, status: 400
    end
  end

  private
  def event_params
    params.require(:event).permit(:title)
  end
end
