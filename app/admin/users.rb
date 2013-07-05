ActiveAdmin.register User do

index do
	selectable_column
	column :id
	column :email
	column :firstname
	column :lastname
	column :profile
	column :linkedin
	column :age
	column :d1
	column :d2
	column :d3
	column :d4
	column :d5
	column :created_at
	default_actions
end

filter :email   
filter :firstname
filter :lastname
  
end
