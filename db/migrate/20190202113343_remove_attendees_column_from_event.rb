class RemoveAttendeesColumnFromEvent < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :attendees
  end
end
