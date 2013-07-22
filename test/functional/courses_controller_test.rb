require 'test_helper'

class CoursesControllerAnonymousTest < ActionController::TestCase
  tests CoursesController

  setup do
    @course = courses(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:courses)
  end

  test "new requires authorization" do
    get :new
    assert_response 401
  end

  test "should create course" do
    assert_difference('Course.count', +1) do
      post :create, course: { category: @course.category, content: @course.content, image: @course.image, title: @course.title }
    end

    assert_redirected_to course_path(assigns(:course))
  end

  test "should show course" do
    get :show, id: @course
    assert_response :success
  end

  test "edit requires authorization" do
    get :edit, id: @course
    assert_response 401
  end

  test "should update course" do
    put :update, id: @course, course: { category: @course.category, content: @course.content, image: @course.image, title: @course.title }
    assert_redirected_to course_path(assigns(:course))
  end

  test "should destroy course" do
    assert_difference('Course.count', -1) do
      delete :destroy, id: @course
    end

    assert_redirected_to courses_path
  end
end

class CoursesControllerAuthenticatedTest  < ActionController::TestCase
  tests CoursesController

  setup do
    @course = courses(:one)
    authenticate_as "lewagon", "lewagon"
  end

  def authenticate_as login, password
    @request.env['HTTP_AUTHORIZATION'] = ActionController::HttpAuthentication::Basic.encode_credentials(login, password)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @course
    assert_response :success
  end
end
