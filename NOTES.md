Models:
    users
    orders
    supplements

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
	first_name
	last_name
    username
    password_digest
    

supplements - table
	name
    description
	manufacturer

orders - table
	user_id
	supplement_id
	quantity
	price


MVP: As a user, I can:
    Log into the site
    View a list of all supplements
    Create an order for specific supplements
    Modify or delete an order
    Create new supplements

Stretch: As a user, I can:
    


