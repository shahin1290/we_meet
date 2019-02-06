class NotificationsController < ApplicationController
  before_action :authenticate_user!

  def create
    group = Group.find(params[:group_id])

    if current_user == group.organizer
      UserMailer.welcome_email(group).deliver
      render json: { message: "Notifications was successfully sent to #{group.members.count} group members" }
    else 
      render json: { error: 'You must be an organizer to send an email' }, status: 403
    end
  end 
end