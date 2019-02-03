class UserMailer < ApplicationMailer
  def welcome_email(group, current_user)
    recipients = group.members.map(&:user)
    mail(
      from: current_user.email,
      to: recipients.pluck(:email), 
      subject: "Notification from WeMeet"
    )
  end
end
