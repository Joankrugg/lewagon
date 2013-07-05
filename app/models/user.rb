class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  attr_accessible :firstname, :lastname, :age , :profile, :linkedin
  attr_accessible :p1, :p2
  attr_accessible :q1, :q2, :q3, :q4, :q5, :q6


  before_validation(:on => :create) do
    self.password = 'password'
    self.password_confirmation = self.password
  end


  validates :firstname, :presence => true
  validates :lastname, :presence => true
  validates :age, :presence => true
  validates :profile, :presence => true

end
