class Course < ActiveRecord::Base
  attr_accessible :category, :content, :image, :title, :short, :slug, :mailchimp_list_id, :date, :price, :address, :eventbrite_url, :length
  extend FriendlyId
  friendly_id :title, use: :slugged
end
