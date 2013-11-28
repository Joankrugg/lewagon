class ChangeActiveadminPassword < ActiveRecord::Migration
  def up
    AdminUser.find_by_email('admin@example.com').destroy
    AdminUser.create!(:email => 'contact@lewagon.org', :password => 'lewagon0611', :password_confirmation => 'lewagon0611') 
  end

  def down
    AdminUser.find_by_email('contact@lewagon.org').destroy
    AdminUser.create!(:email => 'admin@example.com', :password => 'password', :password_confirmation => 'password') 
  end

end

