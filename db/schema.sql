CREATE burgers_db;

USE burgers_db;

CREATE burgers (
    id INT NOT NULL AUTO_INCREMENT, 
    burger_name VARCHAR(50) NOT NULL, 
    devoured BOOLEAN NOT NULL 
);