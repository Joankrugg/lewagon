class AddLengthToCourses < ActiveRecord::Migration
  def change
     add_column :courses, :length, :string
  end
end
