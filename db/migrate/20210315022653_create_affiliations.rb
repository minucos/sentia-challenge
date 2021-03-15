class CreateAffiliations < ActiveRecord::Migration[6.1]
  def change
    create_table :affiliations do |t|
      t.string :name, null: false
      t.timestamps
    end
  end
end
