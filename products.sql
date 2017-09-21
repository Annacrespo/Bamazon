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

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (1011, "chair", "furniture", 100, 10); 

-- UPDATE products where (product_name, stock_quantity)-- 
-- VALUES(var item, var qty)

-- UPDATE products
-- SET stock_quantity =${input value}
-- WHERE product_name = ${item id};

SELECT * FROM products WHERE item_id = 1010;
