class ChangeActiveadminPassword < ActiveRecord::Migration
  def up
    AdminUser.create!(:email => 'contact@lewagon.org', :password => 'lewagon0611', :password_confirmation => 'lewagon0611') 
  end

  def down
    AdminUser.find_by_email('contact@lewagon.org').destroy
  end

end

