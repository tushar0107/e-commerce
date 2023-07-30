# e-commerce
This is basically a CRUD application built under Python and Django (with frontend using HTML & CSS).

Modules:

Customer
This app contains User Registration, User Login, User Logout for the Customer Model.
It uses django's default User model referenced as a OneToOne Relationship to the Customer model.

Product
The Product model contains product details (name, description, price, image, category) as its attributes.

OrderItem
has a Product model referenced with a ForeignKey
It stores an instance for each product with quantity, a user wants to order.
total_amount will be calculated after user selects the quantity. This functionality will be added through the frontend.

Order
has the OrderItem model referenced with a ForeignKey
It confirms the order for all items ordered by each Customer.
