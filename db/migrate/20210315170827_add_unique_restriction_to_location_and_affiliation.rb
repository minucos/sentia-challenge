class AddUniqueRestrictionToLocationAndAffiliation < ActiveRecord::Migration[6.1]
  def change
    remove_column :locations, :name
    remove_column :affiliations, :name
    add_column :locations, :name, :string, null: false
    add_column :affiliations, :name, :string, null: false
    add_index :locations, :name, unique: true
    add_index :affiliations, :name, unique: true
  end
end
