CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(50),
	department_name VARCHAR(50),
	price INT(10),
	stock_quantity INT(6),
    PRIMARY KEY(item_id)
);
SELECT * FROM products;

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("chair", "furniture", 100, 10),
("tv", "electronics", 300, 1),("kayak", "toys", 150, 5),("phone", "electronics", 350, 6),("couch", "furniture", 150, 2),("coffee machine", "appliances", 400, 3),("house cleaning", "services", 40, 20), ("wood", "outdoor", 10, 100),("sponge", "cleaning", 1, 30);
-- UPDATE products where (product_name, stock_quantity)-- 
-- VALUES(var item, var qty)

-- UPDATE products
-- SET stock_quantity =${input value}
-- WHERE product_name = ${item id};

SELECT stock_quantity FROM products WHERE item_id = ?;
