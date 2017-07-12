class FoodsController < ApplicationController
    def create
        list_id = params[:list_id]
            
        @list = List.find(list_id)

        list = params["list"]
        list.each do |item|
            @food = Food.create!(name: item, list_id: list_id)
       end 
    end
    
end