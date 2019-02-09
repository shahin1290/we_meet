class MembershipsController < ApplicationController
  before_action :authenticate_user!
  include DeviseTokenAuth::Concerns::SetUserByToken

  def create
    binding.pry
    group = Group.find(params[:group_id])
    group.members.create(user: current_user)
    render json: { message: 'You are now a member' }
  end
end
