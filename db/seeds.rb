# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Order.create(user_id: 9, name: "Order 1")
Order.create(user_id: 9, name: "Order 2")
Order.create(user_id: 9, name: "Order 3")

OrderSupplement.create(supplement_id: 1, order_id: 63, user_id: 9)
OrderSupplement.create(supplement_id: 2, order_id: 63, user_id: 9)

