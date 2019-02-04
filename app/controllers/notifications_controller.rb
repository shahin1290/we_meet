class NotificationsController < ApplicationController
  before_action :authenticate_user!

  def send_mail
    group = Group.find(params[:id])
    UserMailer.welcome_email(group).deliver
    render json: { message: 'Notifications sent successfully' }
  end
  
end
