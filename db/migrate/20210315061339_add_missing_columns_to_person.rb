class AddMissingColumnsToPerson < ActiveRecord::Migration[6.1]
  def change
    add_column :people, :species, :string, null: false
    remove_column :people, :gender
    add_column :people, :gender, :string, null: false

  end
end
