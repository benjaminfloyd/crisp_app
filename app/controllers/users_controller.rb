class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users 
    end 

    def create
        @user = User.create(user_params)
        redirect_to user_path(@user)
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end 

    def update
        @user = User.find(params[:id])
        @user.update(user_params)
        redirect_to user_path(@user)
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
        redirect_to users_path
    end

    private

    def user_params
        params.require(:user).permit(:email, :)
    end

end
