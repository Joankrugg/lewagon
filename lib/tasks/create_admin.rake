desc "Create admin user"
task :create_admin => :environment do
  AdminUser.create!(:email => 'contact@lewagon.org', :password => '#corpuscleg', :password_confirmation => '#corpuscleg')
end