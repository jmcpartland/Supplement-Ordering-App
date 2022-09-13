class CreateSupplements < ActiveRecord::Migration[6.1]
  def change
    create_table :supplements do |t|
      t.string :name
      t.string :manufacturer
      t.integer :serving_size
      t.timestamps
    end
  end
end
