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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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
  `product_image` longblob,
  `product_description` varchar(45) DEFAULT NULL,
  `Tuote_kuvat` varchar(45) DEFAULT NULL,
  `menu_number` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idproduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (2,'Lasagne','9,99',_binary 'kuva','Kotitekoinen lasagne',NULL,'1'),(3,'Pasta carbonara','5.50',_binary 'kuva','Suoraan Italiasta',NULL,'1'),(4,'Mega-mättö','25,99',_binary 'kuva','Suurempaan nälkään',NULL,'2'),(5,'Pyttipannu','6,75',_binary 'kuva','Taattua kotiruokaa',NULL,'2'),(6,'Makkara-perunat','4',_binary 'kuva','Täyttävä klassikko',NULL,'3'),(7,'Stroganoff','32,50',_binary 'kuva','Venäjän herkku',NULL,'3'),(8,'Balsami-omena kakku','13,00',_binary 'kuva','Jäliruokana vallan mainio',NULL,'4'),(9,'Mansikka-pirtelö','5,99',_binary 'kuva','Tuoreista mansikoista',NULL,'4'),(10,'Cola','2,99',_binary 'kuva','virvoitus juoma',NULL,'2'),(12,'Four cheese pizza','7,99',_binary 'Tähän kuva',NULL,NULL,'1'),(111,'Maitoa','1,99',_binary 'kuva','Juoma',NULL,'3');
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
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (22,'Röyssy','Parkkila 21','09:00-18:00','https://img.ilcdn.fi/cvIw1u41-PYJ19LGj4LgNDOaugQ=/full-fit-in/612x0/img-s3.ilcdn.fi/800220867dc214a994ff8d77444eb803a2d6a5bfea8a4ec1c102f722d348e7bb.jpg','2','Perinteinen'),(46,'Shos','Keskustantie 42','10:00-22:00','https://img.ilcdn.fi/o8XWlY2elFqGkw0rszp7Gjmw9Ds=/full-fit-in/612x0/img-s3.ilcdn.fi/23fc070ad31e1a3971dc66bb424cecca3dd69909cf7154e07ffe9a13349e6135.jpg','1','Kiinalainen'),(66,'Burger Dutch','Keskustantie 55','24/7','https://www.ravintola.fi/uploads/2020/01/544c4a8f-loyly009-2-scaled.jpg','1','Amerikkalainen'),(101,'Katzano','Laitila 12','11:00-22:00','https://hs.mediadelivery.fi/img/978/27aa93832a074680a46b15b87b2afca8.jpg','3','Venäläinen'),(102,'Pihvi-paja','Nurkankatu 54','07:00-22:00','data:image/png;base64,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','4','Grilli'),(103,'Tonin kööki','Metsäpolku 2','10:00-17:00','https://www.visitalavus.fi/media/alavus-visit-layout/img/cache/miljoonarock-ravintola_tuuri_visit-alavus-679x400,c,q=75.jpg','4','Kotiruoka'),(104,'Tanelin tupa','Luulajantie 22','12:00-21:00','https://lh3.googleusercontent.com/proxy/LgHNm8bY5t6wOCRHcCAcVwCaiLmKbajHi98WZeM-_n6aIp2UmKlNoWFr348AmWOa7-DvNmWpqssuEBuWg60A8SIi76CliwUwRwcBud9byAJbSADRNkWeL-tnX9c','3','Perinteinen');
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
) ENGINE=InnoDB AUTO_INCREMENT=824 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
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

-- Dump completed on 2021-12-13 20:03:39
