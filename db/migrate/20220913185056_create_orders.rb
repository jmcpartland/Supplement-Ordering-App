class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :order_number
      t.integer :quantity
      t.decimal :price
      t.integer :user_id
      t.integer :supplement_id

      t.timestamps
    end
  end
end
