class ListsController < ApplicationController

    def index
        @user = User.find(params["user_id"])
        @list = @user.list 
        render json: @list
    end
    
    def show
        @user = User.find(params[:user_id])
        @list = @user.list.find(params[:id])
            render json: {
                user: @user,
                list: @list
            }
    end

    def create
        @user = User.find(params[:user_id])
        @list = @user.list.create(params[:id])
            if @list.save
                redirect_to user_path(@artist)
            else
            render status: 500,
                json: {
                error: @list.errors
            }
        end
    end
    
    def update
        @user = User.find(params[:user_id])
        @user.list.update(params[:id])
        if @list.update(params[:id])
            redirect_to user_path(@user)
        else
            render status 500,
            json {
                error: @list.errors
            }    
    end   
        
    def destroy
      @user = User.find(params[:id])

      if @user.destroy
      redirect_to users_path
    else
        render status: 500,
        json: {
            error:'Could not delete'
        }

    end        
  end       

  private
  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :zip_code,
    :image)
   
  end
end
