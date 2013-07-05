class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :title
      t.text :short
      t.text :content
      t.string :image, :default => 'default_course_image.png'
      t.string :category
      t.string :slug
      t.string :mailchimp_list_id
      t.timestamps
    end
    
    add_index :courses, :slug, unique: true
    
  end
end
