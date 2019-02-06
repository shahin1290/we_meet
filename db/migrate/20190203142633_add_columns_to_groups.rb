class AddColumnsToGroups < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :category_id, :string
    add_column :groups, :description, :text
    add_column :groups, :location, :string
    add_column :groups, :organizer_id, :integer
  end
end
