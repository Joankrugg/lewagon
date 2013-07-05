class RegistrationsController < Devise::RegistrationsController
  
  def create
      super
      UserMailer.welcome_email(@user).deliver if @user.save
  end
  
  protected
  
  def after_sign_up_path_for(resource)
      '/merci'
  end 

  private
    
  def build_resource(*args)
      super
  end 

end
