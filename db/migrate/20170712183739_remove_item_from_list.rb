class RemoveItemFromList < ActiveRecord::Migration[5.1]
  def change
    remove_column :lists, :item, :string
  end
end
