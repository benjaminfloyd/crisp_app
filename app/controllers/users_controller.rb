class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users 
    end 

    def show
        @user = User.find(params[:userId])
        @list = @user.list
        puts @user
        render json: {
            user: @user,
            list: @list
        }    
    end 

    def create
        @user = User.create(user_params)
        redirect_to user_path(@user)
    end

    def update
        @user = User.find(params[:userId])
        @user.update(user_params)
        redirect_to user_path(@user)
    end

    def destroy
        @user = User.find(params[:userId])
        @user.destroy
        redirect_to users_path
    end

    private

    
    def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :zip_code,
    :image)
    end

end
