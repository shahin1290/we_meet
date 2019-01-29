class RenameMembershipToMember < ActiveRecord::Migration[5.2]
  def change
    rename_table :memberships, :members
  end
end
