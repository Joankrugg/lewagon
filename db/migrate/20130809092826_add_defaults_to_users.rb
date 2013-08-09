class AddDefaultsToUsers < ActiveRecord::Migration
  def change
    change_column :users, :p1, :boolean, null: false, default: false
    change_column :users, :p2, :boolean, null: false, default: false
  end
end
