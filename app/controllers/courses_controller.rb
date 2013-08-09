class CoursesController < InheritedResources::Base
  
  http_basic_authenticate_with name: "lewagon", password: "lewagon", only: [:edit,:new]
  
  def index
    @courses = Course.order("category, title").all
    @grouped_courses = @courses.group_by(&:category)
  end

  def show
    @course = Course.find(params[:id])
    @courses = Course.order("category, title").all
    @grouped_courses = @courses.group_by(&:category)
  end
  
  def subscribe
    course = Course.find(params[:id])
    email = params[:email][:email]
    gb = Gibbon::API.new
    @response = gb.lists.subscribe({:id =>  course.mailchimp_list_id , :email => {:email => email}, :double_optin => false}) 
    puts @response
  end
    
end
