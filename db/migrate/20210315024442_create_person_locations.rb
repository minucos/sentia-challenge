class CreatePersonLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :person_locations do |t|
      t.integer :person_id, null: false
      t.integer :location_id, null: false
      t.timestamps
    end

    add_index :person_locations, :person_id
    add_index :person_locations, [:location_id, :person_id], unique: true
  end
end
