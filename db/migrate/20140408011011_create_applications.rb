class CreateApplications < ActiveRecord::Migration
  def change
    create_table :applications do |t|
      t.string :first_name
      t.string :last_name
      t.string :class_level
      t.string :email
      t.text :description
      t.timestamps
    end
  end
end
