class MembersController < ApplicationController
  before_action :authenticate_user!

  def create
    group = Group.find(params[:group_id])
    group.members.create(user: current_user)
    render json: { message: 'You are now a member' }
  end
end
