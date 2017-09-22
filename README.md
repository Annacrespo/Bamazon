# Bamazon App! 
## Overview
**A command line interface Amazon-like storefront app that uses _node_ and _MySQL workbench_. The app will take in orders from customers and deplete stock from the store's inventory.**

The app will prompt users with two messages.
The first should ask them the ID of the product they would like to buy.
The second message should ask how many units of the product they would like to buy.
![Purchase](./images/Purchase1.png)

The customer is able to place an order and select any quantity. However, if the quantity exceeds the current stock levels at the warehouse database, an error will occur and disable to customer from continuing.
![Insufficient1](./images/ins1.png)

The app will alert 'Insufficient quantity!' and will ask the user again what they would like to purchase.
![Insufficient2](./images/ins2.png)

If the customer places an order successfully, the app will thank them for their purchase, provide the total for the purchase, and how many are remaining in the warehouse database.
![total](./images/total.png)

The app will then update the SQL workbench and reflect the remaining quantity in the app.
![stockinventory](./images/stockinventory.png)

mySQL workbench database with updates from the app.
![mysqldatabase](./images/mysql.png)
