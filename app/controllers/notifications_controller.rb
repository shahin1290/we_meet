class NotificationsController < ApplicationController
  before_action :authenticate_user!
  def send_mail
    # @group = Group.find(params[:id])
    users = User.where.not(id: current_user.id)
    UserMailer.welcome_email(users).deliver
  end
end
