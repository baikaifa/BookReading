/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : xinyue

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2018-12-12 15:28:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_table
-- ----------------------------
DROP TABLE IF EXISTS `admin_table`;
CREATE TABLE `admin_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_table
-- ----------------------------
INSERT INTO `admin_table` VALUES ('1', 'keifer', '123456');

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of books_table
-- ----------------------------
INSERT INTO `books_table` VALUES ('1', 'http://127.0.0.1:3001/bookcheng/1.png', '武逆', '只是小虾米');
INSERT INTO `books_table` VALUES ('2', 'http://127.0.0.1:3001/bookcheng/2.png', '013号凶案', '月半墙');
INSERT INTO `books_table` VALUES ('3', 'http://127.0.0.1:3001/bookcheng/3.png', '风水师的诅咒', '三两二钱');
INSERT INTO `books_table` VALUES ('4', 'http://127.0.0.1:3001/bookcheng/4.png', '娇软小媳妇', '东方玉如意');
INSERT INTO `books_table` VALUES ('5', 'http://127.0.0.1:3001/bookcheng/5.png', '闪婚霸爱', '我是木木');
INSERT INTO `books_table` VALUES ('6', 'http://127.0.0.1:3001/bookcheng/6.png', '幸福私家菜', '雀鸣');
INSERT INTO `books_table` VALUES ('7', 'http://127.0.0.1:3001/bookcheng/7.png', '修仙', '暖风拂面');
INSERT INTO `books_table` VALUES ('8', 'http://127.0.0.1:3001/bookcheng/8.png', '至尊股神', '伊戈达拉');

-- ----------------------------
-- Table structure for boys_table
-- ----------------------------
DROP TABLE IF EXISTS `boys_table`;
CREATE TABLE `boys_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `pic_src` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of boys_table
-- ----------------------------
INSERT INTO `boys_table` VALUES ('1', 'http://127.0.0.1:3001/bookcheng/boy1.png', '男神特工', '我是河道蟹');
INSERT INTO `boys_table` VALUES ('2', 'http://127.0.0.1:3001/bookcheng/boy2.png', '最强医仙混花都', '醉医少');
INSERT INTO `boys_table` VALUES ('3', 'http://127.0.0.1:3001/bookcheng/boy3.png', '痞子至尊', '克头黑');
INSERT INTO `boys_table` VALUES ('4', 'http://127.0.0.1:3001/bookcheng/boy5.png', '重生都市最强帝', '我吃大鲨鱼');
INSERT INTO `boys_table` VALUES ('5', 'http://127.0.0.1:3001/bookcheng/boy5.png', '都市绝品护花高手', '星辉流明');
INSERT INTO `boys_table` VALUES ('6', 'http://127.0.0.1:3001/bookcheng/boy6.png', '医道圣仙', '玉面浮屠');
INSERT INTO `boys_table` VALUES ('7', 'http://127.0.0.1:3001/bookcheng/boy7.png', '校花的特殊保镖', '酒色');
INSERT INTO `boys_table` VALUES ('8', 'http://127.0.0.1:3001/bookcheng/boy8.png', '绝品奇门医圣', '苍生有余');
INSERT INTO `boys_table` VALUES ('35', 'qwe', 'qwe', 'qwe');
INSERT INTO `boys_table` VALUES ('38', 'http://127.0.0.1:3001/bookcheng/boy6.png', 'keifer', 'keifer');
INSERT INTO `boys_table` VALUES ('73', '123123', '123123', '123');
INSERT INTO `boys_table` VALUES ('78', 'undefined', 'undefined', 'undefined');
INSERT INTO `boys_table` VALUES ('79', '123', 'qwe', '123');

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
-- Table structure for comic_table
-- ----------------------------
DROP TABLE IF EXISTS `comic_table`;
CREATE TABLE `comic_table` (
  `ID` int(11) NOT NULL,
  `pic_src` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comic_table
-- ----------------------------
INSERT INTO `comic_table` VALUES ('1', 'http://127.0.0.1:3001/bookcheng/man1.png', '有一家杂货店', '晏南');
INSERT INTO `comic_table` VALUES ('2', 'http://127.0.0.1:3001/bookcheng/man2.png', '屠神的执剑少年', '夜魔天子');
INSERT INTO `comic_table` VALUES ('3', 'http://127.0.0.1:3001/bookcheng/man3.png', '恋爱过敏症', '八月未央');
INSERT INTO `comic_table` VALUES ('4', 'http://127.0.0.1:3001/bookcheng/man4.png', '男友是只外星傲娇犬', '黎灼灼');
INSERT INTO `comic_table` VALUES ('5', 'http://127.0.0.1:3001/bookcheng/man5.png', '妹妹们是问题偶像', 'zakuro石榴');
INSERT INTO `comic_table` VALUES ('6', 'http://127.0.0.1:3001/bookcheng/man6.png', '造神计划', '月悠北安');

-- ----------------------------
-- Table structure for girls_table
-- ----------------------------
DROP TABLE IF EXISTS `girls_table`;
CREATE TABLE `girls_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `pic_src` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of girls_table
-- ----------------------------
INSERT INTO `girls_table` VALUES ('1', 'http://127.0.0.1:3001/bookcheng/nv1.png', '报告首长', '残菊');
INSERT INTO `girls_table` VALUES ('2', 'http://127.0.0.1:3001/bookcheng/nv2.png', '不死魂女', '千煦的城');
INSERT INTO `girls_table` VALUES ('3', 'http://127.0.0.1:3001/bookcheng/nv3.png', '都市之修仙归来', '永恒的世界');
INSERT INTO `girls_table` VALUES ('4', 'http://127.0.0.1:3001/bookcheng/nv4.png', '肥妞逆袭成网红', '依晗');
INSERT INTO `girls_table` VALUES ('5', 'http://127.0.0.1:3001/bookcheng/nv5.png', '妻约已过', '琪璇');
INSERT INTO `girls_table` VALUES ('6', 'http://127.0.0.1:3001/bookcheng/nv6.png', '甜田厨娘', '刘大锤');
INSERT INTO `girls_table` VALUES ('7', 'http://127.0.0.1:3001/bookcheng/nv7.png', '我的美女俏总裁', '我吃小苹果');
INSERT INTO `girls_table` VALUES ('8', 'http://127.0.0.1:3001/bookcheng/nv8.png', '医女狂妃', '雪月夜');

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

-- ----------------------------
-- Table structure for shujia_table
-- ----------------------------
DROP TABLE IF EXISTS `shujia_table`;
CREATE TABLE `shujia_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `book_pic` varchar(255) NOT NULL,
  `yidu` varchar(255) NOT NULL,
  `shuqian` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shujia_table
-- ----------------------------
INSERT INTO `shujia_table` VALUES ('1', 'http://127.0.0.1:3001/bookjia/4.png', '32', '11');
INSERT INTO `shujia_table` VALUES ('2', 'http://127.0.0.1:3001/bookjia/6.png', '56', '45');
INSERT INTO `shujia_table` VALUES ('3', 'http://127.0.0.1:3001/bookjia/boy1.png', '35', '1');
INSERT INTO `shujia_table` VALUES ('4', 'http://127.0.0.1:3001/bookjia/boy2.png', '57', '23');
INSERT INTO `shujia_table` VALUES ('5', 'http://127.0.0.1:3001/bookjia/nv3.png', '32', '99');
INSERT INTO `shujia_table` VALUES ('6', 'http://127.0.0.1:3001/bookjia/nv4.png', '79', '45');

-- ----------------------------
-- Table structure for user_table
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table` (
  `ID` int(30) NOT NULL AUTO_INCREMENT,
  `tel` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_table
-- ----------------------------
INSERT INTO `user_table` VALUES ('7', '17733972991', '123456');
INSERT INTO `user_table` VALUES ('8', '17733972992', '123456');
INSERT INTO `user_table` VALUES ('9', '17733972993', '123456');
INSERT INTO `user_table` VALUES ('10', '17733972994', '123456');
INSERT INTO `user_table` VALUES ('11', '17733972995', '123456');
INSERT INTO `user_table` VALUES ('12', '17733972996', '123456');
INSERT INTO `user_table` VALUES ('13', '17733972999', '123456');
INSERT INTO `user_table` VALUES ('14', '17733972998', '123456');
INSERT INTO `user_table` VALUES ('15', '17733972991', '123456');
INSERT INTO `user_table` VALUES ('16', '17733972991', '123456');
INSERT INTO `user_table` VALUES ('17', '17733972991', '123456');
INSERT INTO `user_table` VALUES ('18', '17733972991', '123456');
INSERT INTO `user_table` VALUES ('19', '17733972991', '123456');
INSERT INTO `user_table` VALUES ('20', '17733972991', '123456');
INSERT INTO `user_table` VALUES ('21', '17733972991', '123456');
INSERT INTO `user_table` VALUES ('22', '17733972991', '123456');
INSERT INTO `user_table` VALUES ('23', '17733972991', '123456');
INSERT INTO `user_table` VALUES ('24', '17733972991', '123456');
INSERT INTO `user_table` VALUES ('25', '17733972991', '123456');
INSERT INTO `user_table` VALUES ('26', '11111111111', '123456');
INSERT INTO `user_table` VALUES ('27', '17733972911', '123456');
INSERT INTO `user_table` VALUES ('28', '17733958441', '123456');
INSERT INTO `user_table` VALUES ('29', '17756641254', '123456');
INSERT INTO `user_table` VALUES ('30', '12254874551', '123456');
INSERT INTO `user_table` VALUES ('31', '12548845124', '123456');
INSERT INTO `user_table` VALUES ('32', '15588451223', '123456');
INSERT INTO `user_table` VALUES ('33', '17733876552', '123456');
INSERT INTO `user_table` VALUES ('34', '17726374856', '123456');
INSERT INTO `user_table` VALUES ('35', '17733972991', '123456');
INSERT INTO `user_table` VALUES ('36', '17733972991', '123456');
INSERT INTO `user_table` VALUES ('37', '17733972991', '123456');
