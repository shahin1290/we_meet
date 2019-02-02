class userMailer < ApplicationMailer
  default to: -> { @group.memberships.pluck(:email) },
          from: 'notification@example.com'
  def welcome_email
    mail(subject: 'Welcome to My Awesome Site')
  end
end
