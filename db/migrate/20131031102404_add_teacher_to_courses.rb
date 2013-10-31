class AddTeacherToCourses < ActiveRecord::Migration
  def change
    add_column :courses, :teacher_name, :string
    add_column :courses, :teacher_image, :string
    add_column :courses, :teacher_desc, :text
    add_column :courses, :teacher_linkedin, :string
    add_column :courses, :teacher_twitter, :string
  end
end
