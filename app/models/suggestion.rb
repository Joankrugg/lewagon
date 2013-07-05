class Suggestion < ActiveRecord::Base
  attr_accessible :content, :email
  validates :content, :email, presence: true
end
