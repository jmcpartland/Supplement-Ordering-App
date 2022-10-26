class CreateOrderSupplements < ActiveRecord::Migration[6.1]
  def change
    create_table :order_supplements do |t|
      t.integer :supplement_id
      t.integer :order_id
      t.integer :user_id

      t.timestamps
    end
  end
end
