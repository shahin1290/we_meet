class GroupsController < ApplicationController
  def index
  end

  def show
    group = Group.find(params[:id])
    render json: group, serializer: Groups::ShowSerializer
  end

  def create
    render json: { message: 'You have created a group successfully' }
  end
end