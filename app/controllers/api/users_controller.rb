class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users 
    end 

    def show 
        puts params
        @user = User.find(params[:id])

        @lists = @user.lists
       
        lists_w_foods = @lists.map do |list|
            { id: list.id, title: list.title, foods: list.foods }
        end
        puts @user
        puts @lists

        render json: {
            user: @user,
            lists: lists_w_foods
        }    
    end 

    def create
        @user = User.create(user_params)
        redirect_to user_path(@user)
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
    params.require(:user).permit(:email, :first_name, :last_name, :zip_code,
    :image)
    end

end
