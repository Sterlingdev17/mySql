-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS playlist_db;
-- Create a database called programming_db --
CREATE DATABASE playlist_db;

use playlist_db;

CREATE TABLE SONGS (
    id INT AUTO_INCREMENT NOT NULL,
    artist VARCHAR(30) NOT NULL,
    title VARCHAR(60) NOT NULL,
    genre VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
);