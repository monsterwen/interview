class User < ApplicationRecord
  has_many :projects

  attr_accessor :password
  validates :name, :presence => true  
  validates :email, :presence => true  

    
  def password  
    @password  
  end  
    
  def password=(pass)  
    return unless pass  
    @password = pass  
    generate_password(pass)  
  end  
  
  def self.authenticate(email, password)  
    user = User.find_by_email(email)  
    if user && Digest::MD5.hexdigest(password + user.salt) == user.hashed_password  
      return user  
    end  
    false  
  end  

  private  
  def generate_password(pass)  
    salt = Array.new(10){rand(1024).to_s(36)}.join  
    self.salt, self.hashed_password =   
      salt, Digest::MD5.hexdigest(pass + salt)  
  end  
end
