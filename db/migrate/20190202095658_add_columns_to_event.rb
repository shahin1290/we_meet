class AddColumnsToEvent < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :description, :text
    add_column :events, :location, :string
    add_column :events, :organizer, :string
    add_column :events, :date_and_time, :string
    add_column :events, :attendees, :string, array: true, default: []
  end
end
