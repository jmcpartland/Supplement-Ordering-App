class CreateJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :supplements, :orders do |t|
      t.index :supplement_id
      t.index :order_id
    end
  end
end
