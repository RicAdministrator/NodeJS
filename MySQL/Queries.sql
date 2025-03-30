SHOW DATABASES

USE mydb
SELECT * FROM customers ORDER BY address

-------------------------------------------------------------------------------------------------------

-- Drop users table
DROP TABLE users;

-- Create users table
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    favorite_product int,
    PRIMARY KEY (id)
);

-- Add data to users table
INSERT INTO users (name, favorite_product) VALUES ('John', 1);
INSERT INTO users (name, favorite_product) VALUES ('Peter', 1);
INSERT INTO users (name, favorite_product) VALUES ('Amy', 2);
INSERT INTO users (name) VALUES ('Hannah');
INSERT INTO users (name) VALUES ('Michael');

-- Get users
SELECT * FROM  users

-------------------------------------------------------------------------------------------------------

-- Drop products table
DROP TABLE products;

-- Create products table
CREATE TABLE products (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Add data to products table
INSERT INTO products (name) VALUES ('Chocolate Heaven');
INSERT INTO products (name) VALUES ('Tasty Lemons');
INSERT INTO products (name) VALUES ('Vanilla Dreams');

-- Get products
SELECT * FROM  products

-------------------------------------------------------------------------------------------------------

SELECT * FROM  users;
SELECT * FROM  products;

SELECT 
	users.name AS user, 
    products.name AS favorite 
FROM 
	users JOIN
	products ON users.favorite_product = products.id
    
-------------------------------------------------------------------------------------------------------

SELECT * FROM  users;
SELECT * FROM  products;
    
SELECT 
	users.name AS user,
	products.name AS favorite
FROM 
	users
	LEFT JOIN products ON users.favorite_product = products.id    

-------------------------------------------------------------------------------------------------------

SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users.favorite_product = products.id

-------------------------------------------------------------------------------------------------------

SELECT * FROM  users;
SELECT * FROM  products;

SELECT 
	users.name AS user,
	products.name AS favorite
FROM 
	users RIGHT JOIN 
    products ON users.favorite_product = products.id
    
SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id