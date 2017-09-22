CREATE DATABASE bamazon_db;

USE bamazon_db;


CREATE TABLE products (
	item_id INTEGER(2) AUTO_INCREMENT,
	product_name VARCHAR(50),
	department_name VARCHAR(50),
	price INT(10),
	stock_quantity INT(6),
    PRIMARY KEY(item_id)
);
SELECT * FROM products;

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("chair", "furniture", 100, 10),
("tv", "electronics", 300, 1),
("kayak", "toys", 150, 5),
("phone", "electronics", 350, 6),
("couch", "furniture", 150, 2),
("coffee machine", "appliances", 400, 3),
("blender", "appliances", 40, 20),
("firewood", "outdoor", 10, 100),
("sponge", "cleaning", 1, 30),
("stroller", "baby", 200, 2);


SELECT stock_quantity FROM products WHERE item_id = ?;
SELECT price FROM products WHERE item_id = ?;
