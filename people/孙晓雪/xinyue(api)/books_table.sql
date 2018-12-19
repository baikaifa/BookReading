/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : xinyue

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2018-12-19 09:29:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for books_table
-- ----------------------------
DROP TABLE IF EXISTS `books_table`;
CREATE TABLE `books_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `pic_src` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `subscribe` int(11) DEFAULT NULL,
  `read` int(11) DEFAULT NULL,
  `state` varchar(5) DEFAULT NULL,
  `qudao` varchar(10) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  `begin` varchar(25) DEFAULT NULL,
  `over` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of books_table
-- ----------------------------
INSERT INTO `books_table` VALUES ('1', 'http://127.0.0.1:3001/bookcheng/1.png', '武逆', '只是小虾米', '7100', '8746', '已完结', '心阅版权', '动作', '2017-08-17', '2018-12-16');
INSERT INTO `books_table` VALUES ('2', 'http://127.0.0.1:3001/bookcheng/2.png', '013号凶案', '月半墙', '4677', '5288', '正在更新', '心阅版权', '悬疑', '2016-04-12', '2018-12-11');
INSERT INTO `books_table` VALUES ('3', 'http://127.0.0.1:3001/bookcheng/3.png', '风水师的诅咒', '三两二钱', '3574', '5736', '正在更新', '个人原创', '惊悚', '2017-03-04', '2018-12-22');
INSERT INTO `books_table` VALUES ('4', 'http://127.0.0.1:3001/bookcheng/4.png', '娇软小媳妇', '东方玉如意', '17845', '24578', '已完结', '心悦版权', '言情', '2018-03-08', '2018-12-18');
INSERT INTO `books_table` VALUES ('5', 'http://127.0.0.1:3001/bookcheng/5.png', '闪婚霸爱', '我是木木', '2489', '3554', '已完结', '个人原创', '言情', '2018-07-30', '2018-11-13');
INSERT INTO `books_table` VALUES ('6', 'http://127.0.0.1:3001/bookcheng/6.png', '幸福私家菜', '雀鸣', '5730', '5893', '已完结', '第三方购买', '都市', '2017-12-26', '2018-05-07');
INSERT INTO `books_table` VALUES ('7', 'http://127.0.0.1:3001/bookcheng/7.png', '修仙', '暖风拂面', '3795', '6389', '正在更新', '个人原创', '仙侠', '2017-11-11', '2018-10-08');
INSERT INTO `books_table` VALUES ('8', 'http://127.0.0.1:3001/bookcheng/8.png', '至尊股神', '伊戈达拉', '4726', '6803', '已完结', '心阅版权', '都市', '2016-09-10', '2017-11-14');
