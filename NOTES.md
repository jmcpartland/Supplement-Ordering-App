
## Structure
Models:
    user
    order
    supplement

User -< Order >- Supplement
User -< Supplement

Relationships:
    supplements HAS_MANY orders
    supplements HAS_MANY users THROUGH orders

    orders BELONGS_TO supplements
    orders BELONGS_TO users

    users HAS_MANY orders
    users HAS_MANY supplements THROUGH orders


Database:

users - table
    username
    password_digest

supplements - table
	name
	manufacturer
    serving_size

supplements_orders - table
    supplement_id
    order_id

orders - table   C R U D
	user_id
	supplement_id
	order_number
    quantity
	price


MVP: As a user, I can:
    Log into the site
    View a list of all supplements
    Create an order for specific supplements
    Update or delete an order
    Create new supplements

Stretch: As a user, I can:
    


## Things to do
clean up table columns to match new associations

configure Serialization for all models


example of order:
```
o = Order.last
o.supplements.create([{name: "test sup"}, {name: "2 test sup"}])
```

## How to update records with has_many through

```console
o = Order.first
s = Supplement.third
o.supplements<<(s)
```
