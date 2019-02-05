class AddColumnsToGroup < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :location, :string
    add_column :groups, :description, :string
  end
end
