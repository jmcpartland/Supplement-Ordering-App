class ChangeOrdersSupplementsTable < ActiveRecord::Migration[6.1]
  def change
    rename_table :orders_supplements, :order_supplements
  end
end
