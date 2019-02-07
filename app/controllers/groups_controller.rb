# frozen_string_literal: true

class GroupsController < ApplicationController
  before_action :authenticate_user!, only: [:create]

  def index; end

  def show
    group = Group.find(params[:id])
    render json: group, serializer: Groups::ShowSerializer
  end

  def create
    group = Group.create(group_params.merge!(organizer: current_user))
    binding.pry
    if group.persisted?
      render json: { message: 'You have created a group successfully' }
    else
      render json: { error: group.errors.full_messages }, status: 400
    end
  end

  private

  def group_params
    params.require(:group).permit(:name, :category_id, :description, :location, :organizer_id)
  end
end
