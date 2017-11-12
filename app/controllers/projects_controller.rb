class ProjectsController < ApplicationController
    def new
        @project=Project.new
    end
    
    def index
        @projects=Project.all
        
        @users=User.all
        @categories=Category.all
        
        
    end
        
end