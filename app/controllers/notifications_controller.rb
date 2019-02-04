class NotificationsController < ApplicationController
  before_action :authenticate_user!

  def create
    group = Group.find(params[:group_id])
    UserMailer.welcome_email(group).deliver
    render json: { message: 'Notifications sent successfully' }
  end
  
end
