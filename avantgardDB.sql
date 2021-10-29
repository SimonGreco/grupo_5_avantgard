CREATE DATABASE  IF NOT EXISTS `avantgard` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `avantgard`;
-- MySQL dump 10.13  Distrib 5.7.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: avantgard
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Sintetizadores'),(2,'Auriculares'),(3,'Microfonos'),(4,'Amplificadores y parlantes'),(5,'Teclados');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Chascomús');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `price` varchar(45) NOT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `marca` varchar(100) DEFAULT NULL,
  `modelo` varchar(100) DEFAULT NULL,
  `description` text NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `oferta` tinyint(4) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `usuario_id_idx` (`userId`),
  KEY `categoria_id_idx` (`categoryId`),
  CONSTRAINT `categoryId` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Consola Mezclador Mackie','22500','nuevo','Mackie','PROFX4V2','El Mackie ProFX4v2 es un mezclador de 4 canales robusto y versátil que ofrece una gran variedad de conexiones y efectos innovadores. Con dos potentes preamplificadores Vita, 16 efectos digitales incorporados, ecualización gráfica general de 5 vías y ecualizador de dos vías por canal, el ProFX4v2 entrega características premium de Mackie en una unidad compacta y fácil de llevar.','D_NQ_NP_2X_816025-MLA25347808916_022017-F.webp',1,1,51),(2,'Pioneer Djs 1000 Sampler','340500','nuevo','Pioneer DJ','DJS1000','Con una pantalla táctil de 7 pulgadas a todo color, 16 keys multicolores de entrada por pasos, performance pads multicolores, una gran cantidad de entradas y salidas, muestreo en vivo y otras características para directo, con el DJS-1000 en la cabina llevarás tus sets al siguiente nivel.','Diseño sin título (1).png',1,1,51),(3,'Akai Mpx8 Sampler Sd Midi Usb','25000','nuevo','Akai','MPX8','Cargue virtualmente cualquier muestra a través de la tarjeta SD o SDHC estándar y asignela a cualquiera de las ocho almohadillas sensibles a la presión y la velocidad con retroiluminación del MPX8. Es así de simple. Úsalo en el estudio. Úsalo en vivo en el escenario o en el aire. MPX8 integra la probada tecnología Akai Pro en un diseño compacto y duradero diseñado para funcionar','sampler.png',1,1,51),(4,'CONTROLADOR MIDI','25600','nuevo','Novation','Launchpad Mini MK3','Launchpad Mini es un controlador de grilla MIDI de 64 pads RGB retroiluminados. El más compacto y portátil. Te brinda todo lo que necesitas para comenzar a actuar en Ableton Live, y cabe en tu bolso. Commenzá a crear e interpretar pistas con Ableton Live donde quiera que esté, utilizando la gran variedad de sonidos en la caja para comenzar.','ControladorMIDI.png',1,2,51),(5,'Auricular Sennheiser Hd 650 Hifi','70400','nuevo','Sennheiser','HD 650','Los HD 650 son lo último en diseño de auriculares dinámicos abiertos para audiófilos. Desarrollados a partir de los premiados HD 600, para el HD 650 se utilizan mejores materiales para una mejor reproducción de sonido. Capturan al usuario con su expresividad y emoción mientras mantienen una absoluta precisión y reproducción realista. Disfrute del sonido perfecto.','auricular.png',1,2,51),(6,'Controlador DJ Behringer CMD DV-1 ','32405','nuevo','Behringer','CMD DV-1','La música une y crea momentos únicos, por eso con este controlador Behringer vas a poder darle tu propio toque a las canciones que más te gustan y pinchar como DJ profesional.','controlador.png',1,1,51),(7,'Procesador Sampler De Efectos Dinámicos Korg','40600','nuevo','Korg','Kaosspad KP3+','La serie Kaoss Pad, de unidades de efectos, es famosa por su intuitivo panel táctil. El modelo insignia KP3, que apareció en 2006, continúa siendo aclamado por los músicos y DJs de todo el mundo por sus potentes programas de efecto, y sus completas funcionalidades de Sampling. Los sonidos dance, la música EDM y los efectos utilizados para crearlas, han evolucionado significativamente en estos últimos siete años. Te presentamos el KP3+.','Diseño sin título.png',1,1,51),(8,'Micrófono Audio-Technica AT2050 condensador o','43900','nuevo','Audio-Technica','AT2050','Fiel reflejo de la realidad. Con este producto lograrás que la reproducción obtenida sea lo más parecida a la original. Excelente para grabar voces debido a su sensibilidad y amplio rango de frecuencia.','micro2.png',1,3,51),(9,'Monitor De Estudio Krk Rp7 G4 Rokit','111804','nuevo','KRK','RP7 G4','El nuevo monitor profesional KRK ROKIT RP7 G4 Generación 4 de 7 lleva la creatividad de la música y el sonido a un nivel completamente nuevo de la industria. El ecualizador gráfico impulsado por DSP con 25 configuraciones ayuda a acondicionar su entorno acústico mientras ofrece nuevos niveles de versatilidad en un monitor de estudio. Los controladores combinados fabricados con Kevlar® aseguran la misma integridad sonora en todas las frecuencias. Una nueva caja de altavoz y puerto de disparo frontal científicamente diseñados ofrecen una extensión y precisión excepcionales, punzonado y posicionamiento de sala flexible.','parlante c.webp',1,4,51),(10,'Micrófono Rode NT2-A condensador cardioide y ','90400','nuevo','Rode','NT2-A','Con este producto lograrás que la reproducción obtenida sea lo más parecida a la original. Excelente para grabar voces debido a su sensibilidad y amplio rango de frecuencia. Al ser condensador, posibilitará un resultado claro y fino. Es ideal para percusiones, guitarras, pianos, entre otros. Por su respuesta tan definida ante la voz, es el más elegido por los profesionales.','microfono.png',1,3,51),(11,'Parlante Thonet & Vander Hi-End Kugel con blu','75400','nuevo','Thonet & Vander','Kugel','Disfrutar de un amplio espectro de sonidos, incluso los más agudos es posible con este parlante woofer, tweeter. Vas a sentir la diferencia en la calidad sonora excelente. Al ser activo solo necesitarás conectarlo a la fuente de sonido y el mismo equipo se encargará de amplificar y reproducir: ganarás practicidad y espacio, ya que además requiere menos cableado que uno pasivo. Es la solución más conveniente si querés producir música en tu casa o en un estudio, y también para DJs.','parlante.png',1,4,51),(12,'Sintetizador Teenage Engineering Po-32 Tonic ','18975','nuevo','Teenage Engineering','Po-32 tonic','Sintetizador y secuenciador de batería y percusión con grabación de parámetros, efectos y sonidos ilimitados con el VST Microtonic a través de transferencia de datos. El PO-32 es el primer Pocket Operator que admite sonidos ilimitados. Además de 16 sonidos preseteados, podes utilizar el VST de Sonic Charge, Microtonic para crear tus sonidos propios y transferirlo de manera inalámbrica a tu PO-32 a través del micrófono incorporado o utilizando un cable.','pocket.png',1,1,51),(13,'Jbl Lsr-305 Bafle','80000','nuevo','JBL','LSR305','Tamaño del driver de baja: frecuencia127 mm 5. Tamaño del driver de alta: frecuencia25 mm 1 Tipo de driver de alta frecuencia:Cúpula blanda Cruce1725 Hz acústico de 4º orden Linkwitz-RileyConfiguración de potencia: BiamplificadaAmplificador de potencia de driver de alta: frecuencia41 W Clase DAmplificador de potencia de driver de baja: frecuencia41 W Clase D','parlante2.png',1,4,51),(14,'Proco Px-12 Consola Audio Mixer Potenciada Us','38990','nuevo','Proco','PX12','Mezcladora potenciada, 12 canales. Bluetooth / USB / Grabación','sintC.png',1,1,51),(15,'Yamaha Montage8 88-key Sintetizador Workstati','1000000','nuevo','Yamaha','MONTAGE8 WH','El motor de síntesis de control de movimiento unifica y controla dos motores de sonido icónicos: AWM2 (forma de onda y síntesis de alta calidad) y fm-x (síntesis de modulación de frecuencia pura y moderna).','sintetizador.png',1,5,51),(16,'Controlador Midi Novation Launchpad','25600','nuevo','Novation','Launchpad Mini MK3','Launchpad Mini es un controlador de grilla MIDI de 64 pads RGB retroiluminados. El más compacto y portátil. Te brinda todo lo que necesitas para comenzar a actuar en Ableton Live, y cabe en tu bolso. Commenzá a crear e interpretar pistas con Ableton Live donde quiera que esté, utilizando la gran variedad de sonidos en la caja para comenzar.','ControladorMIDI.png',1,1,51),(17,'Consola Mezclador Mackie','22500','nuevo','Mackie','PROFX4V2','El Mackie ProFX4v2 es un mezclador de 4 canales robusto y versátil que ofrece una gran variedad de conexiones y efectos innovadores. Con dos potentes preamplificadores Vita, 16 efectos digitales incorporados, ecualización gráfica general de 5 vías y ecualizador de dos vías por canal, el ProFX4v2 entrega características premium de Mackie en una unidad compacta y fácil de llevar.','D_NQ_NP_2X_816025-MLA25347808916_022017-F.webp',1,1,51),(18,'Novation Peak Sintetizador Polifónico','291300','nuevo','Novation','Peak','Con tres nuevos osciladores Oxford por voz, cada uno con formas de onda tradicionales y acceso a 17 wavetables digitales, el sintetizador analógico polifónico NOVATION PEAK de 8 voces es perfecto para los productores de música electrónica moderna. También es perfecto para el diseño de sonido, con una matriz de modulación de 16 slots más 16 asignaciones directas accesibles directamente desde el panel frontal. Cada voz puede utilizar su propio filtro multimodo analógico, con distorsión pre y post filtro también disponibles. Tene en cuenta la reverberb, el delay y el chorus incorporados, un arpegiador flexible y una entrada de modulación de CV para la integración con el equipo modular, y el potencial creativo en el módulo del sintetizador Novation Peak se hace evidente.','novation.png',1,1,51),(19,'Procesador Sampler De Efectos Dinámicos Korg ','40600','nuevo','Korg','Kaosspad KP3+','La serie Kaoss Pad, de unidades de efectos, es famosa por su intuitivo panel táctil. El modelo insignia KP3, que apareció en 2006, continúa siendo aclamado por los músicos y DJs de todo el mundo por sus potentes programas de efecto, y sus completas funcionalidades de Sampling. Los sonidos dance, la música EDM y los efectos utilizados para crearlas, han evolucionado significativamente en estos últimos siete años. Te presentamos el KP3+.','Diseño sin título.png',1,2,51);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(100) NOT NULL,
  `admin` tinyint(4) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `documento` int(11) DEFAULT NULL,
  `phone` int(20) DEFAULT NULL,
  `addres` varchar(100) DEFAULT NULL,
  `cityId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `ciudad_id_idx` (`cityId`),
  CONSTRAINT `cityId` FOREIGN KEY (`cityId`) REFERENCES `cities` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Marlene','Harnetty','mharnetty0@blinklist.com','vNMt7F',1,'LigulaVehicula.jpg',0,0,'',1),(2,'Bernetta','Vedstra','bvedstra1@theguardian.com','iGrZJosP9',1,'DuiProinLeo.jpg',0,0,'',1),(3,'Thibaut','Gauche','tgauche2@tiny.cc','3ZuGpVzXjKk',1,'Sit.jpg',0,0,'',1),(4,'Revkah','Warters','rwarters3@telegraph.co.uk','3veZUizUrTGz',1,'EtUltricesPosuere.jpg',0,0,'',1),(5,'Luigi','Steckings','lsteckings4@google.co.jp','NJ2Hdp5',1,'PorttitorId.jpg',0,0,'',1),(6,'Justine','Lecointe','jlecointe5@examiner.com','yXaklCxk',1,'Feugiat.jpeg',0,0,'',1),(7,'Juli','Terzo','jterzo6@sitemeter.com','LqCfu2iiuZ',1,'Praesent.jpg',0,0,'',1),(8,'Alia','Wasbrough','awasbrough7@unesco.org','jKMgZA',1,'Integer.jpg',0,0,'',1),(9,'Alan','Jennemann','ajennemann8@quantcast.com','9bFOr3o',1,'DiamNeque.jpg',0,0,'',1),(10,'Bryna','Baton','bbaton9@noaa.gov','Ztet0858OYb',1,'AcDiam.jpg',0,0,'',1),(11,'Jessy','Emps','jempsa@instagram.com','kldSvBQ',1,'VenenatisTristique.jpg',0,0,'',1),(12,'Kelcey','Byrkmyr','kbyrkmyrb@reddit.com','50s3QnRjv',1,'VitaeMattis.jpeg',0,0,'',1),(13,'Claiborn','Tomkys','ctomkysc@sakura.ne.jp','2pIoLQIAW6Q3',1,'VelitEu.jpg',0,0,'',1),(14,'Jarrod','Roch','jrochd@fema.gov','SNmrGK1',1,'Enim.jpg',0,0,'',1),(15,'Flint','Crighton','fcrightone@canalblog.com','NNWf4N3r',1,'PulvinarLobortis.jpg',0,0,'',1),(16,'Nalani','Reside','nresidef@chicagotribune.com','4v5OalmN29Z3',1,'PurusEu.jpg',0,0,'',1),(17,'Hansiain','Syplus','hsyplusg@wunderground.com','dnqphsy',1,'NislNuncNisl.jpg',0,0,'',1),(18,'Lemmy','Carwithim','lcarwithimh@techcrunch.com','0hD4mOSOUZh',1,'MaurisLaoreetUt.jpg',0,0,'',1),(19,'Sadella','Thominga','sthomingai@wp.com','zZj6EegxJ0',1,'Eu.jpg',0,0,'',1),(20,'Paolina','Daldan','pdaldanj@miitbeian.gov.cn','VwVvj4ns',1,'OrciLuctus.jpg',0,0,'',1),(21,'Trstram','Tolomei','ttolomeik@webs.com','5W8yA2S6Bl',1,'SagittisDui.jpg',0,0,'',1),(22,'Gus','Muncey','gmunceyl@engadget.com','jjQX8982M',1,'NibhLigulaNec.jpg',0,0,'',1),(23,'Ivette','Chasmoor','ichasmoorm@wired.com','Hcq5jB',1,'Erat.jpg',0,0,'',1),(24,'Keenan','Griss','kgrissn@illinois.edu','qvPj7w0Nd',1,'AliquetMassa.jpg',0,0,'',1),(25,'Kellyann','Leeds','kleedso@theglobeandmail.com','eK2QS40TMyr',1,'Donec.jpg',0,0,'',1),(26,'Kaylil','Neylon','kneylonp@tripadvisor.com','o6ehCK3ZWIB',1,'Morbi.jpg',0,0,'',1),(27,'Wayland','Harbisher','wharbisherq@google.pl','mUR0z8R',1,'FelisEu.jpg',0,0,'',1),(28,'Rose','Bacop','rbacopr@cloudflare.com','P1DCZrqp',1,'Enim.jpg',0,0,'',1),(29,'Rosemary','Sibbson','rsibbsons@baidu.com','AzSZxVu',1,'LigulaVehicula.jpg',0,0,'',1),(30,'Otto','Gidney','ogidneyt@exblog.jp','99toHAcy',1,'Placerat.jpg',0,0,'',1),(31,'Aretha','D\'Andrea','adandreau@webeden.co.uk','Hqlo51ZOp',1,'DiamEratFermentum.jpg',0,0,'',1),(32,'Francyne','Rotlauf','frotlaufv@t-online.de','CGPL3y',1,'MaurisViverraDiam.jpg',0,0,'',1),(33,'Sanderson','Readwin','sreadwinw@trellian.com','ohlXyFRhX',1,'DonecUt.jpg',0,0,'',1),(34,'Stacy','Mordue','smorduex@macromedia.com','z5DD8HUa',1,'ScelerisqueMauris.jpg',0,0,'',1),(35,'Stanley','Hanstock','shanstocky@irs.gov','AMWuOza6eJE',1,'NullaSuspendissePotenti.jpg',0,0,'',1),(36,'Halimeda','Richarson','hricharsonz@g.co','Ax83fgE3cVe',1,'MorbiVel.jpeg',0,0,'',1),(37,'Liza','Giamelli','lgiamelli10@google.com.hk','dGVBxN',1,'AcNulla.jpg',0,0,'',1),(38,'Abbe','Woodhouse','awoodhouse11@ca.gov','GZ46uSi8A09',1,'Praesent.jpg',0,0,'',1),(39,'Birk','Reiner','breiner12@amazon.de','05nrD0ilGP',1,'SitAmetLobortis.jpg',0,0,'',1),(40,'Bill','Ballard','bballard13@wordpress.com','LLWa6XgxPm',1,'InTempus.jpg',0,0,'',1),(41,'Marleah','Hilling','mhilling14@taobao.com','HodKqt9Eg',1,'SapienArcuSed.jpg',0,0,'',1),(42,'Alair','Zoren','azoren15@gmpg.org','XTMWiK8KYMkl',1,'SapienSapien.jpg',0,0,'',1),(43,'Jeff','Dagwell','jdagwell16@elpais.com','QsbMjFw9G0qq',1,'Ut.jpg',0,0,'',1),(44,'Yehudi','Elward','yelward17@archive.org','i5CS6vqIb',1,'Aliquam.jpg',0,0,'',1),(45,'Vania','Pomeroy','vpomeroy18@princeton.edu','XBg4HSFN',1,'QuisLibero.jpg',0,0,'',1),(46,'Georgeta','Schimon','gschimon19@reuters.com','gWHxgt',1,'Purus.jpeg',0,0,'',1),(47,'Ruthie','Widd','rwidd1a@accuweather.com','eyxIxmD5',1,'Vestibulum.png',0,0,'',1),(48,'Ramon','Fearnley','rfearnley1b@linkedin.com','7LvJDZ',1,'LiberoNullamSit.jpeg',0,0,'',1),(49,'Abran','Ricart','aricart1c@sogou.com','wGEaqhYatV',1,'TempusSitAmet.jpg',0,0,'',1),(50,'Nils','Philo','nphilo1d@springer.com','5iPnXALE4',1,'ASuscipit.jpg',0,0,'',1),(51,'Simon','Greco','simongreco@gmail.com','$2a$10$6xvA5I9kZwaCeqLrIYnac.Dj5f5cRHuUt58Ab/kz1lW2gl2S9cFEq',1,'1632512149473_img_.ico',44169473,2147483647,'Arenales 384',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-29  0:23:06
