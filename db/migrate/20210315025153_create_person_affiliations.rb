class CreatePersonAffiliations < ActiveRecord::Migration[6.1]
  def change
    create_table :person_affiliations do |t|
      t.integer :person_id, null: false
      t.integer :affiliation_id, null: false
      t.timestamps
    end

    add_index :person_affiliations, :person_id
    add_index :person_affiliations, [:affiliation_id, :person_id], unique: true
  end
end
