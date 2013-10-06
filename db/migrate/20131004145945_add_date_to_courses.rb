class AddDateToCourses < ActiveRecord::Migration
  def change
    add_column :courses, :date, :datetime
  end
end
