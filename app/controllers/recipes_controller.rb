class RecipesController < ApplicationController
    include HTTParty
    def index

    end   

    def fetch_recipe
    search = params[:search]
    response = HTTParty.get('http://api.yummly.com/v1/api/recipes?_app_id=3fa3ebcf&_app_key=a547eb1a914afed4c7c72587040d377c&q=' + search + '&requirePictures=true')
    render json: response
    end 

end
