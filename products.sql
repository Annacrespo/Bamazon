CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INTEGER PRIMARY KEY AUTO_INCREMENT,
	product_name VARCHAR(50),
	department_name VARCHAR(50),
	price INT(10),
	stock_quantity INT(6)
);

SELECT * FROM products;