class AddGenderToPerson < ActiveRecord::Migration[6.1]
  def change
    add_column :people, :gender, :string
  end
end
