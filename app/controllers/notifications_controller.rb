class NotificationsController < ApplicationController
  def send_mail
    @group = Group.find(params[:group_id])
    UserMailer.welcome_email.deliver
    flash[:notice] = "Notifications has been sent."
  end
end
