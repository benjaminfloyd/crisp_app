class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :recipe_name
      t.timestamps
    end
  end
end
