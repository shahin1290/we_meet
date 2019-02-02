class UserMailer < ApplicationMailer
  default from: 'notification@example.com'

  def welcome_email(recipients)
    @recipients = recipients
    mail(
      to: recipients.pluck(:email), 
      subject: "New comment on the Subvisual blog"
    )
  end
end
