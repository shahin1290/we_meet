class GroupsController < ApplicationController
  def index
  end

  def show
    group = Group.find(params[:id])
    render json: group, serializer: Groups::ShowSerializer
  end
end