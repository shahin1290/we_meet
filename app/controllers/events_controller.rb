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
    event = Event.new(params.require(:event).permit(:title).merge(group_id: params[:group_id]))
    if event.save
      
      render json: { message: 'You have created an event successfully' }
    else
      render json: { error: event.errors.full_messages }
    end
  end
end
