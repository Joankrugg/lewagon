class Course < ActiveRecord::Base
  attr_accessible :category, :content, :image, :title, :short, :slug, :mailchimp_list_id
  extend FriendlyId
  friendly_id :title, use: :slugged
end
