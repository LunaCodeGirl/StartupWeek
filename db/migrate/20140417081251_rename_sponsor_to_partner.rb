class RenameSponsorToPartner < ActiveRecord::Migration
  def change
    rename_table :sponsors, :partners
  end
end
