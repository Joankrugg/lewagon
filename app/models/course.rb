class Course < ActiveRecord::Base
  attr_accessible :category, :content, :image, :title, :short, :slug, :mailchimp_list_id, 
                  :date, :price, :address, :eventbrite_url, :length, :teacher_image, :teacher_desc, 
                  :teacher_linkedin, :teacher_twitter, :teacher_name
                          
  extend FriendlyId
  friendly_id :title, use: :slugged
end
