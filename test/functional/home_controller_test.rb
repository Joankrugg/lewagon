require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get home" do
    get :page, page: "home"
    assert_response :success
  end
end
