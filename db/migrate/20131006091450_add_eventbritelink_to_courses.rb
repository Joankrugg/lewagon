class AddEventbritelinkToCourses < ActiveRecord::Migration
  def change
    add_column :courses, :eventbrite_url, :string
  end
end
