CREATE DATABASE  IF NOT EXISTS `databaseravintola` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `databaseravintola`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: databaseravintola
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `idmenu` int NOT NULL,
  `product_in_menu` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idmenu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `idorder` int NOT NULL AUTO_INCREMENT,
  `received` varchar(45) DEFAULT NULL,
  `prepearing` varchar(45) DEFAULT NULL,
  `ready_for_delivery` varchar(45) DEFAULT NULL,
  `delivering` varchar(45) DEFAULT NULL,
  `delivered` varchar(45) DEFAULT NULL,
  `order_adress` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idorder`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order/product`
--

DROP TABLE IF EXISTS `order/product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order/product` (
  `idorder/product` int NOT NULL,
  `list_of_products` varchar(45) DEFAULT NULL,
  `delivery_location` varchar(45) DEFAULT NULL,
  `final_cost` varchar(45) DEFAULT NULL,
  `payment_method` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idorder/product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order/product`
--

LOCK TABLES `order/product` WRITE;
/*!40000 ALTER TABLE `order/product` DISABLE KEYS */;
/*!40000 ALTER TABLE `order/product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_history`
--

DROP TABLE IF EXISTS `order_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_history` (
  `idorder_history` int NOT NULL AUTO_INCREMENT,
  `ordered_products` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idorder_history`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_history`
--

LOCK TABLES `order_history` WRITE;
/*!40000 ALTER TABLE `order_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `idproduct` int NOT NULL,
  `product_name` varchar(45) DEFAULT NULL,
  `product_price` varchar(45) DEFAULT NULL,
  `product_image` tinyblob,
  `product_description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idproduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Juusto-porilainen','12,99€',_binary 'kuva','porilainen aurajuustolla'),(2,'Lasagne','9,99€',_binary 'kuva','Kotitekoinen lasagne'),(3,'Pasta carbonara','5.50€',_binary 'kuva','Suoraan Italiasta'),(4,'Mega-mättö','25,99€',_binary 'kuva','Suurempaan nälkään'),(5,'Pyttipannu','6,75',_binary 'kuva','Taattua kotiruokaa'),(6,'Makkara-perunat','4€',_binary 'kuva','Täyttävä klassikko'),(7,'Stroganoff','32,50€',_binary 'kuva','Venäjän herkku'),(8,'Balsami-omena kakku','13,00€',_binary 'kuva','Jäliruokana vallan mainio'),(9,'Mansikka-pirtelö','5,99€',_binary 'kuva','Tuoreista mansikoista'),(10,'Cola','2,99€',_binary 'kuva','virvoitus juoma'),(12,'Four cheese pizza','7,99€',_binary 'Tähän kuva',NULL),(111,'Maitoa','1,99€',_binary 'kuva','Juoma');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `idrestaurant` int NOT NULL AUTO_INCREMENT,
  `restaurant_name` varchar(45) DEFAULT NULL,
  `restaurant_adress` varchar(45) DEFAULT NULL,
  `operating_hours` varchar(45) DEFAULT NULL,
  `restaurant_image` longtext,
  `menu` varchar(45) DEFAULT NULL,
  `restaurant_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idrestaurant`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (22,'Röyssy','Parkkila 21','09:00-18:00','','','Perinteinen'),(46,'Shos','Keskustantie 42','10:00-22:00','','','Kiinalainen'),(66,'Burger Dutch','Keskustantie 55','24/7','','','Amerikkalainen'),(101,'Katzano','Laitila 12','11:00-22:00','','','Venäläinen'),(102,'Pihvi-paja','Nurkankatu 54','07:00-22:00','','','Grilli'),(103,'Tonin kööki','Metsäpolku 2','10:00-17:00','','','Kotiruoka'),(104,'Tanelin tupa','Luulajantie 22','12:00-21:00','','','Perinteinen');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `iduser` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) DEFAULT NULL,
  `user_adress` varchar(45) DEFAULT NULL,
  `user_password` varchar(500) DEFAULT NULL,
  `user_level` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=824 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (804,'Silja-mari','Puutie 45','$2b$10$Xzvqivlz5wPkNawafYDEGexQEIX2cWECiSlOIbwLXyp3ARbTbtv6q',NULL),(805,'silja','Puukuja 123','$2b$10$6Ks171AMZQbQqRXruCmCxuz0brghh/02bnDDPJp42Nolkzo7MH1L.',NULL),(806,'Eemeli','Ylikiiminkitie 12','$2b$10$qfENU8/xai1OP2aN/j874OIsQkKZTIm3ZyZ8fTtI.xiDtZOqrnHIS',NULL),(811,'Teuvo','Teuvola12','$2b$05$KCNFqA0FE892/X89TAGMB.ZmPHIyAOhb9pdzaBM/nesQkO8vIOke.',NULL),(813,'Leevi','Leevilänkatu 49','$2b$05$bVynmlH4HTUtP7R.0diwueMG/aVtF8eMp/vS3WPE79Vb/IAHQAry6',NULL),(823,'Alexi','Maalaiskatu 12','$2b$05$1qxJKJVa4SricGrgTBpuW.lKXy3Znh2vPcM0TAYf0orQk6/PjigGC',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-09 11:05:09
