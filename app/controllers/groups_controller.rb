class GroupsController < ApplicationController
  def index
  end

  def show
    group = Group.find(params[:id])
    render json: group, serializer: Groups::ShowSerializer
  end

  def create
    group = Group.new(params.require(:group).permit(:name))
    if group.save
      render json: { message: 'You have created a group successfully' }
    else
      render json: { error: group.errors.full_messages }
    end
  end

end



