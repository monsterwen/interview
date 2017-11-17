class SessionsController < ApplicationController
  
  def new
  end
  
  def create  
    @user = User.authenticate(params[:email], params[:password])  
    if @user 
      flash[:success] = "You are successfully logged in!"  
      log_in(@user)
      render 'welcome'
    else  
      flash[:notice] = "The login or password is not correct."  
      redirect_to new_user_path  
    end  
  end  
  
  

  def destroy
    log_out
    redirect_to signup_url
  end
  
  def log_in(user)
    session[:user_id] = user.id
  end
  
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end
  
  def log_out
    session.delete(:user_id)
    @current_user = nil
  end
  
  

end
