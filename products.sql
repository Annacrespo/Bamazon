CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INTEGER(10) PRIMARY KEY AUTO_INCREMENT,
	product_name VARCHAR(50),
	department_name VARCHAR(50),
	price INT(10),
	stock_quantity INT(6)
);

SELECT * FROM products;

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES (1010, couch, furniture, 100, 10); 