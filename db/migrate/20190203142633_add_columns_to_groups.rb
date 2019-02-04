class AddColumnsToGroups < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :category_id, :string
  end
end
