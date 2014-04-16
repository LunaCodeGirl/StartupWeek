class AddSubTitleToEvent < ActiveRecord::Migration
  def change
    change_table :events do |t|
      t.rename :name, :title
      t.string :subtitle
    end
  end
end
