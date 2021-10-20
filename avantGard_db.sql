CREATE DATABASE `AvantGard` /*!40100 DEFAULT CHARACTER SET utf8mb4 */

DROP TABLE IF EXISTS 'cities';
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;

CREATE TABLE 'cities'(
'id' int(11) AUTO_INCREMENT NOT NULL,
'name' varchar(45),
PRIMARY KEY ('id'),
UNIQUE KEY ('id'),
)  DEFAULT CHARSET=utf8mb4;


LOCK TABLES 'cities' WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;

UNLOCK TABLES;

--
-- Table structure for "categories" 
--

DROP TABLE IF EXISTS 'categories';
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;

CREATE TABLE 'categories' (
  'id' int(11)  AUTO_INCREMENT,
  'name' varchar(45),
  PRIMARY KEY ('id'),
  UNIQUE KEY 'categories_un' ('id','name')
)  DEFAULT CHARSET=utf8mb4;


LOCK TABLES 'categories' WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;

UNLOCK TABLES;

--
-- Table structure for 'users' 
--

DROP TABLE IF EXISTS 'users';
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;

CREATE TABLE 'users' (
   'id' int(11) AUTO_INCREMENT,
   'firstName' varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
   'lastName' varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
   'email' varchar (100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
   'password' varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
   'admin' bool NOT NULL,
   'document' int(8) NOT NULL,
   'phone' int(11),
   'adress' varchar,
   'postCode' int,
   PRIMARY KEY ('id'),
   UNIQUE KEY ('id', 'email')
   FOREIGN KEY ('postCode')
) DEFAULT CHARSET=utf8mb4;

LOCK TABLES 'users' WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;

UNLOCK TABLES;

--
-- Table structure for 'products'
--

DROP TABLE IF EXISTS 'products';
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;

CREATE TABLE 'products' (
   'id' int(11) AUTO_INCREMENT,
   'name' varchar COLLATE utf8mb4_unicode_520_ci NOT NULL,
   'price' varchar COLLATE utf8mb4_unicode_520_ci NOT NULL,
   'estado' varchar COLLATE utf8mb4_unicode_520_ci,
   'marca' varchar COLLATE utf8mb4_unicode_520_ci,
   'modelo' varchar COLLATE utf8mb4_unicode_520_ci,
   'description' text COLLATE utf8mb4_unicode_520_ci,
   'image' blob,
   'oferta' bool,
   'categoria_id' int NOT NULL,
   'usuario_id' int NOT NULL,
   PRIMARY KEY ('id'),
   UNIQUE KEY ('id'),
   FOREIGN KEY ('categoria_id', 'usuario_id')
) DEFAULT CHARSET=utf8mb4;

LOCK TABLES 'products' WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;


UNLOCK TABLES;



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