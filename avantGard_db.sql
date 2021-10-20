CREATE DATABASE AvantGard /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

-- cities definition

--  Drop table

--  DROP TABLE cities;

CREATE TABLE cities (
	id int(11) auto_increment NOT NULL,
	name varchar(45) NULL,
	CONSTRAINT id_PK PRIMARY KEY (id),
	CONSTRAINT id_UN UNIQUE KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
DROP TABLE IF EXISTS cities;


-- categories definition

--  Drop table

--  DROP TABLE categories;

CREATE TABLE categories (
	id INT(11) auto_increment NULL,
	name varchar(45) NULL,
	CONSTRAINT id_PK PRIMARY KEY (id),
	CONSTRAINT categories_UN UNIQUE KEY (id, name)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
DROP TABLE IF EXISTS categories;


-- products definition

--  Drop table

--  DROP TABLE products;

CREATE TABLE products (
	id INT(11) auto_increment NULL,
	name varchar(100) NOT NULL,
	price varchar(100) NOT NULL,
	estado varchar(100) NULL,
	marca VARCHAR(100) NULL,
	modelo VARCHAR(100) NULL,
	description TEXT NULL,
	image BLOB NULL,
	oferta BOOL NULL,
	categoria_Id INT NOT NULL,
	usuario_Id INT NOT NULL,
	CONSTRAINT id_PK PRIMARY KEY (id),
	CONSTRAINT id_UN UNIQUE KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
DROP TABLE IF EXISTS products;


-- users definition

--  Drop table

--  DROP TABLE users;

CREATE TABLE users (
	id INT(11) auto_increment NULL,
	firstName varchar(100) NOT NULL,
	lastName varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	password varchar(255) NOT NULL,
	admin BOOL NOT NULL,
	document INT(8) NOT NULL,
	phone INT(11) NULL,
	adress varchar(100) NULL,
	postCode INT NULL,
	CONSTRAINT id_PK PRIMARY KEY (id),
	CONSTRAINT users_UN UNIQUE KEY (id,email)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
DROP TABLE IF EXISTS users;

--
-- Dumping routines for database 'AvantGard'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-20  0:00:00