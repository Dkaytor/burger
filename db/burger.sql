DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devour BOOLEAN NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devour)
VALUES ("Bacon Burger", false);

INSERT INTO burgers (burger_name, devour)
VALUES ("Blue Cheese Burger", false);

INSERT INTO burgers (burger_name, devour)
VALUES ("Cheddar Burger", false);
