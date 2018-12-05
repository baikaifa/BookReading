/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : xinyue

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2018-12-05 15:08:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for books_table
-- ----------------------------
DROP TABLE IF EXISTS `books_table`;
CREATE TABLE `books_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `pic_src` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of books_table
-- ----------------------------
INSERT INTO `books_table` VALUES ('1', 'http://127.0.0.1:3001/1.jpg', '斗破苍穹', '唐三');

-- ----------------------------
-- Table structure for carousel_table
-- ----------------------------
DROP TABLE IF EXISTS `carousel_table`;
CREATE TABLE `carousel_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carousel_table
-- ----------------------------

-- ----------------------------
-- Table structure for hi_chat
-- ----------------------------
DROP TABLE IF EXISTS `hi_chat`;
CREATE TABLE `hi_chat` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `pic_src` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hi_chat
-- ----------------------------

-- ----------------------------
-- Table structure for original_recommendation_table
-- ----------------------------
DROP TABLE IF EXISTS `original_recommendation_table`;
CREATE TABLE `original_recommendation_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `pic_src` varchar(255) NOT NULL,
  `book_name` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of original_recommendation_table
-- ----------------------------

-- ----------------------------
-- Table structure for originate_carousel_table
-- ----------------------------
DROP TABLE IF EXISTS `originate_carousel_table`;
CREATE TABLE `originate_carousel_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of originate_carousel_table
-- ----------------------------

-- ----------------------------
-- Table structure for registerpassword_table
-- ----------------------------
DROP TABLE IF EXISTS `registerpassword_table`;
CREATE TABLE `registerpassword_table` (
  `ID` int(11) NOT NULL,
  `message` varchar(255) NOT NULL,
  `success` tinyint(255) NOT NULL,
  `userinfo` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registerpassword_table
-- ----------------------------

-- ----------------------------
-- Table structure for registersign_table
-- ----------------------------
DROP TABLE IF EXISTS `registersign_table`;
CREATE TABLE `registersign_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `verification_code` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `success` tinyint(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registersign_table
-- ----------------------------

-- ----------------------------
-- Table structure for resources
-- ----------------------------
DROP TABLE IF EXISTS `resources`;
CREATE TABLE `resources` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `book_bean` int(11) NOT NULL,
  `bean_coupon` int(11) NOT NULL,
  `monthly_ticket` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of resources
-- ----------------------------
