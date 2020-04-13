-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS seed_db;
-- Create a database called programming_db --
CREATE DATABASE seed_db;

use seed_db;
-- Department Table --
CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    names VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);
-- Role Table--
CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(30,2) NULL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY(department_id) REFERENCES department(id)

);
-- Employee table --
CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    Last_name VARCHAR(30),
    role_id INT,
    manager_id INT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(role_id) REFERENCES roles(id)
);
-- Insert into deaprtment --
INSERT INTO department (names)
VALUES ("Pharmacy");

INSERT INTO department (names)
VALUES ("Radiology");

INSERT INTO department (names)
VALUES ("Lab");

INSERT INTO department (names)
VALUES ("Cardiology");

INSERT INTO department (names)
VALUES ("Neurology");

INSERT INTO department (names)
VALUES ("Information_System");


-- insert into roles --
INSERT INTO roles (title, salary, department_id)
VALUES ("Physician", 250000.00, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("Pharmacist", 120000.00, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Nurse", 70000.00, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("tech", 40000.00, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Neurologist", 300000.00, 5);

INSERT INTO roles (title, salary, department_id)
VALUES ("Engineer", 90000, 6);

INSERT INTO roles (title, salary, department_id)
VALUES ("Biologist", 65000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("MRI_tech", 45000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("XRAY_tech", 48000, 2);

-- insert into employee --
INSERT INTO employee (first_name, Last_name, role_id, manager_id)
VALUES ("Sterling", "Etienne", 6, 1);

INSERT INTO employee (first_name, Last_name, role_id, manager_id)
VALUES ("Peter", "Skerm", 2, 2);

INSERT INTO employee (first_name, Last_name, role_id, manager_id)
VALUES ("MaryLynn", "Skruck", 2, 2);

INSERT INTO employee (first_name, Last_name, role_id, manager_id)
VALUES ("Juan", "Quinones", 4, 4);

INSERT INTO employee (first_name, Last_name, role_id, manager_id)
VALUES ("Viv", "Rivet", 5, 5);

INSERT INTO employee (first_name, Last_name, role_id, manager_id)
VALUES ("Marvell", "Bradley", 1, 6);

INSERT INTO employee (first_name, Last_name, role_id, manager_id)
VALUES ("Solomon", "pime", 5, 5);

INSERT INTO employee (first_name, Last_name, role_id, manager_id)
VALUES ("Sophist", "Etienne", 1, 6);

INSERT INTO employee (first_name, Last_name, role_id, manager_id)
VALUES ("Peter", "Etienne", 3, 3);

INSERT INTO employee (first_name, Last_name, role_id, manager_id)
VALUES ("Rose", "Blaise", 7, 10);

INSERT INTO employee (first_name, Last_name, role_id, manager_id)
VALUES ("Steve", "Blaise", 8, 7);

INSERT INTO employee (first_name, Last_name, role_id, manager_id)
VALUES ("Carl", "Etienne", 9, 7);

