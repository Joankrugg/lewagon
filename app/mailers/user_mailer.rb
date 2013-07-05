class UserMailer < ActionMailer::Base
  default from: "contact@lewagon.org"

  def welcome_email(user)
    @user = user
    @url  = ""
    mail(:to => user.email, :subject => "Bienvenue dans le wagon!")
  end


end
