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
  
  
end
