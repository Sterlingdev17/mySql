-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS seed_db;
-- Create a database called programming_db --
CREATE DATABASE seed_db;

use seed_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    names VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL (5,3) NULL,
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    Last_name VARCHAR(30),
    role_id INT,
    manager_id INT NULL,
    PRIMARY KEY (id)
);

