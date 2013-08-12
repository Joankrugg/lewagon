class HomeController < ApplicationController
  
  def index
  	sign_out :user
    render 'page', page: "home"
  end

  def merci
	sign_out :user
  end
  
  def page
    render params[:page]
  end
  
  def subscribe
    email = params[:email][:email]
    gb = Gibbon::API.new
    @response = gb.lists.subscribe({:id => 'b90ec0618e', :email => {:email => email}, :double_optin => false})    
  end
  
end
