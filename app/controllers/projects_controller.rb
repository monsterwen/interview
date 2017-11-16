class ProjectsController < ApplicationController
    def new
        @project=Project.new
    end
    
    def index
        @projects=Project.all.paginate(page: params[:page], per_page: 2)
        
        @users=User.all
        @categories=Category.all
        
        
    end
        
end