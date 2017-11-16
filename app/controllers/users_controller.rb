class UsersController < ApplicationController
    
    def index
      
       @users= User.all.paginate(page: params[:page], per_page: 2)
    end
 
    
    def new
        @user=User.new
    end
    
    def show
       @user=User.find(params[:id]) 
    end
    
    
    def create
        @user = User.new(user_params)    
        if @user.save
          redirect_to @user
        else
          render 'new'
        end
    end
  
    private

    def user_params
        params.require(:user).permit(:name, :email, :password)

    end

end