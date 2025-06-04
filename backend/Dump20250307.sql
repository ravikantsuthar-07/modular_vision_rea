-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: modular_vision_era
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `about`
--

DROP TABLE IF EXISTS `about`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about` (
  `id` int NOT NULL AUTO_INCREMENT,
  `head` varchar(100) NOT NULL,
  `decs1` longtext NOT NULL,
  `decs2` longtext,
  `year` varchar(45) NOT NULL,
  `image` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about`
--

LOCK TABLES `about` WRITE;
/*!40000 ALTER TABLE `about` DISABLE KEYS */;
INSERT INTO `about` VALUES (1,'A Creative Architecture Agency For Your Dream Home','At Modular Vision ERA, we specialize in creating innovative, sustainable, and functional designs tailored to your needs. Whether you’re building your dream home or remodeling an existing space, we ensure every project reflects your vision and enhances your lifestyle.  Our team of passionate architects and designers brings years of expertise in residential and commercial projects. We believe in blending aesthetics with practicality to deliver spaces that are not only visually appealing but also efficient and comfortable.','Our team of passionate architects and designers brings years of expertise in residential and commercial projects. We believe in blending aesthetics with practicality to deliver spaces that are not only visually appealing but also efficient and comfortable.','2013','1741196728268about.jpg');
/*!40000 ALTER TABLE `about` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `mobile` bigint NOT NULL,
  `service` int NOT NULL,
  `message` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (1,'ravi','ravi@gmail.com',7887877887,3,'fdsjalkfjds fsdjklfjdslf sdf sdfa dsf sdaf sadf ');
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth`
--

DROP TABLE IF EXISTS `auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(150) DEFAULT NULL,
  `status` tinyint unsigned DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth`
--

LOCK TABLES `auth` WRITE;
/*!40000 ALTER TABLE `auth` DISABLE KEYS */;
INSERT INTO `auth` VALUES (1,'Admin','admin@admin.com','$2b$10$WfOqNFTZAFyl22TEfutl0uZv.7150pImXgBxjn9xaOVaWpAc0.M.q',1);
/*!40000 ALTER TABLE `auth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  `status` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (4,'asdsad','1741439870313about.jpg',1),(5,'asdff','1741439879348about-1.jpg',1),(6,'asdfasdf','1741439889686about-2.jpg',1),(7,'dfdgfdgs','1741439920604carousel-1.jpg',1);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `message` mediumtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (1,'ravi','ravi@gmail.com','ljksdf','lsdjksdf sdaf  f sdaf sdfdsaf sdf sdf');
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fact`
--

DROP TABLE IF EXISTS `fact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fact` (
  `id` int NOT NULL,
  `head` varchar(50) NOT NULL,
  `decs` varchar(50) NOT NULL,
  `icons` varchar(45) NOT NULL,
  `status` varchar(15) DEFAULT 'inactive',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fact`
--

LOCK TABLES `fact` WRITE;
/*!40000 ALTER TABLE `fact` DISABLE KEYS */;
/*!40000 ALTER TABLE `fact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallerys`
--

DROP TABLE IF EXISTS `gallerys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gallerys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int NOT NULL,
  `image` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallerys`
--

LOCK TABLES `gallerys` WRITE;
/*!40000 ALTER TABLE `gallerys` DISABLE KEYS */;
INSERT INTO `gallerys` VALUES (1,1,'1741959538079about.jpg'),(2,1,'1741959645524about-1.jpg');
/*!40000 ALTER TABLE `gallerys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `category` varchar(45) NOT NULL,
  `serviceid` int DEFAULT NULL,
  `description` mediumtext NOT NULL,
  `type` varchar(45) NOT NULL,
  `complete_date` date NOT NULL,
  `location` varchar(45) NOT NULL,
  `image` varchar(45) NOT NULL,
  `status` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'Modern Living Room','Living Room',5,'This project features a sleek and stylish living space designed to offer both comfort and aesthetics. It blends modern elements with timeless appeal, making it perfect for relaxation and socializing.','Residential Interior','2025-03-04','Bikaner, Raj. India','1741437231278project-4.jpg',1);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `shortDesc` mediumtext NOT NULL,
  `icons` varchar(45) NOT NULL,
  `heading` varchar(50) NOT NULL,
  `subHeading` varchar(95) NOT NULL,
  `Decs1` mediumtext NOT NULL,
  `Decs2` mediumtext NOT NULL,
  `image` varchar(45) NOT NULL,
  `status` tinyint DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'Architecture','We provide innovative architectural solutions that bring your visions to life, blending creativity and functionality.','fas fa-building mb-4 fa-4x','Luxury Interior Design Services','Transforming spaces into works of art with elegant and timeless designs.','At Modular Vision ERA, we specialize in creating luxurious, functional, and bespoke interiors that reflect our clients\' personalities and lifestyles. Our process is collaborative, ensuring your vision is brought to life with every detail meticulously curated.','Whether you\'re looking to redesign a single room or an entire home, we provide end-to-end solutions, from concept development and material selection to project management and final execution.','1741247592129service-1.jpg',1),(3,'3D Animation','Our 3D animation services offer realistic visualizations to bring your designs  to life, aiding in decision-making and project presentation. ','fas fa-cogs mb-4 fa-4x','Luxury Interior Design Services','Transforming spaces into works of art with elegant and timeless designs.','At Modular Vision ERA, we specialize in creating luxurious, functional, and bespoke interiors that reflect our clients\' personalities and lifestyles. Our process is collaborative, ensuring your vision is brought to life with every detail meticulously curated.','Whether you\'re looking to redesign a single room or an entire home, we provide end-to-end solutions, from concept development and material selection to project management and final execution.','1741276882073service-2.jpg',1),(4,'House Planning','We specialize in creating practical and aesthetically pleasing house plans that optimize space and functionality for your lifestyle.','fas fa-home mb-4 fa-4x','Luxury Interior Design Services','Transforming spaces into works of art with elegant and timeless designs.','At Modular Vision ERA, we specialize in creating luxurious, functional, and bespoke interiors that reflect our clients\' personalities and lifestyles. Our process is collaborative, ensuring your vision is brought to life with every detail meticulously curated.','Whether you\'re looking to redesign a single room or an entire home, we provide end-to-end solutions, from concept development and material selection to project management and final execution.','1741277038392service-3.jpg',1),(5,'Interior Design','Transform your living or working spaces with our interior design services that combine style and practicality for a lasting impact.','fas fa-paint-brush mb-4 fa-4x','Luxury Interior Design Services','Transforming spaces into works of art with elegant and timeless designs.','At Modular Vision ERA, we specialize in creating luxurious, functional, and bespoke interiors that reflect our clients\' personalities and lifestyles. Our process is collaborative, ensuring your vision is brought to life with every detail meticulously curated.','Whether you\'re looking to redesign a single room or an entire home, we provide end-to-end solutions, from concept development and material selection to project management and final execution.','1741277135989service-4.jpg',1),(6,'Renovation','Our renovation services revitalize and refresh existing spaces, improving both aesthetics and functionality to meet modern needs.','fas fa-tools mb-4 fa-4x','Luxury Interior Design Services','Transforming spaces into works of art with elegant and timeless designs.','At Modular Vision ERA, we specialize in creating luxurious, functional, and bespoke interiors that reflect our clients\' personalities and lifestyles. Our process is collaborative, ensuring your vision is brought to life with every detail meticulously curated.','Whether you\'re looking to redesign a single room or an entire home, we provide end-to-end solutions, from concept development and material selection to project management and final execution.','1741277239839service-5.jpg',1),(7,'Construction','From ground-up construction to small-scale projects, we offer expert construction services to bring your plans into reality.','fas fa-hammer mb-4 fa-4x','Luxury Interior Design Services','Transforming spaces into works of art with elegant and timeless designs.','At Modular Vision ERA, we specialize in creating luxurious, functional, and bespoke interiors that reflect our clients\' personalities and lifestyles. Our process is collaborative, ensuring your vision is brought to life with every detail meticulously curated.','Whether you\'re looking to redesign a single room or an entire home, we provide end-to-end solutions, from concept development and material selection to project management and final execution.','1741277326738service-6.jpg',1);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slider`
--

DROP TABLE IF EXISTS `slider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `slider` (
  `id` int NOT NULL AUTO_INCREMENT,
  `heading` varchar(255) DEFAULT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT 'inactive',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slider`
--

LOCK TABLES `slider` WRITE;
/*!40000 ALTER TABLE `slider` DISABLE KEYS */;
INSERT INTO `slider` VALUES (3,'Inspiring Architecture & Interiors','Redefining spaces with modern architecture and elegant interiors tailored to your vision.','1741154541320carousel-1.jpg','active'),(4,'Inspiring Architecture & Interiors','Redefining spaces with modern architecture and elegant interiors tailored to your vision.','1741154317447carousel-2.jpg','active');
/*!40000 ALTER TABLE `slider` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-24  7:26:00
