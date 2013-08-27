class BlogController < ApplicationController
  def post
    render "blog/#{params[:title]}.html"
  end
  def index
  end
end
