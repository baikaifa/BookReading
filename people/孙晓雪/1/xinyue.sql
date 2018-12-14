/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : xinyue

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2018-12-14 09:46:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for books_carousel_table
-- ----------------------------
DROP TABLE IF EXISTS `books_carousel_table`;
CREATE TABLE `books_carousel_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of books_carousel_table
-- ----------------------------
INSERT INTO `books_carousel_table` VALUES ('1', 'http://127.0.0.1:3001/carousel/books1.png');
INSERT INTO `books_carousel_table` VALUES ('2', 'http://127.0.0.1:3001/carousel/books2.png');
INSERT INTO `books_carousel_table` VALUES ('3', 'http://127.0.0.1:3001/carousel/books3.png');

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
-- Table structure for boys_carousel_table
-- ----------------------------
DROP TABLE IF EXISTS `boys_carousel_table`;
CREATE TABLE `boys_carousel_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of boys_carousel_table
-- ----------------------------
INSERT INTO `boys_carousel_table` VALUES ('1', 'http://127.0.0.1:3001/carousel/boys1.png');
INSERT INTO `boys_carousel_table` VALUES ('2', 'http://127.0.0.1:3001/carousel/boys2.png');
INSERT INTO `boys_carousel_table` VALUES ('3', 'http://127.0.0.1:3001/carousel/boys3.png');

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

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

-- ----------------------------
-- Table structure for chuban_carousel_table
-- ----------------------------
DROP TABLE IF EXISTS `chuban_carousel_table`;
CREATE TABLE `chuban_carousel_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of chuban_carousel_table
-- ----------------------------
INSERT INTO `chuban_carousel_table` VALUES ('1', 'http://127.0.0.1:3001/carousel/cb1.png');
INSERT INTO `chuban_carousel_table` VALUES ('2', 'http://127.0.0.1:3001/carousel/cb2.png');
INSERT INTO `chuban_carousel_table` VALUES ('3', 'http://127.0.0.1:3001/carousel/cb3.png');

-- ----------------------------
-- Table structure for chuban_table
-- ----------------------------
DROP TABLE IF EXISTS `chuban_table`;
CREATE TABLE `chuban_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) NOT NULL,
  `name` varchar(20) NOT NULL,
  `author` varchar(15) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of chuban_table
-- ----------------------------
INSERT INTO `chuban_table` VALUES ('1', 'http://127.0.0.1:3001/chuban/1.png', '武逆', '只是小虾米');
INSERT INTO `chuban_table` VALUES ('2', 'http://127.0.0.1:3001/chuban/2.png', '甜田小厨娘', '刘大锤');
INSERT INTO `chuban_table` VALUES ('3', 'http://127.0.0.1:3001/chuban/3.png', '最强医仙混花都', '醉医少');
INSERT INTO `chuban_table` VALUES ('4', 'http://127.0.0.1:3001/chuban/4.png', '医道圣仙', '玉面浮屠');
INSERT INTO `chuban_table` VALUES ('5', 'http://127.0.0.1:3001/chuban/5.png', '叶少别烦我', '我是木木');
INSERT INTO `chuban_table` VALUES ('6', 'http://127.0.0.1:3001/chuban/6.png', '有一家杂货店', '晏南');
INSERT INTO `chuban_table` VALUES ('7', 'http://127.0.0.1:3001/chuban/7.png', '恋爱过敏症', '八月未央');
INSERT INTO `chuban_table` VALUES ('8', 'http://127.0.0.1:3001/chuban/8.png', '修仙', '暖风拂面');

-- ----------------------------
-- Table structure for comic_carousel_table
-- ----------------------------
DROP TABLE IF EXISTS `comic_carousel_table`;
CREATE TABLE `comic_carousel_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comic_carousel_table
-- ----------------------------
INSERT INTO `comic_carousel_table` VALUES ('1', 'http://127.0.0.1:3001/carousel/comic1.png');
INSERT INTO `comic_carousel_table` VALUES ('2', 'http://127.0.0.1:3001/carousel/comic2.png');
INSERT INTO `comic_carousel_table` VALUES ('3', 'http://127.0.0.1:3001/carousel/comic3.png');

-- ----------------------------
-- Table structure for comic_table
-- ----------------------------
DROP TABLE IF EXISTS `comic_table`;
CREATE TABLE `comic_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `pic_src` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

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
-- Table structure for comment1_table
-- ----------------------------
DROP TABLE IF EXISTS `comment1_table`;
CREATE TABLE `comment1_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(15) DEFAULT NULL,
  `text` varchar(200) NOT NULL,
  `agree` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment1_table
-- ----------------------------
INSERT INTO `comment1_table` VALUES ('1', 'http://127.0.0.1:3001/hichat/tx6.png', '浮生若梦', '我连魂魄都是黑的，唯独心尖上一点干干净净的放着你，血还是红的，用它护着你，我愿意。', '235');
INSERT INTO `comment1_table` VALUES ('2', 'http://127.0.0.1:3001/hichat/tx4.png', '找不到你了', '如果我喜欢的人拿掉我的烟头，我就戒了；如果我喜欢的人睡在我身边，我就不熬夜了；如果我喜欢的为我添衣，那我就不要风度了。喝不到清晨的粥，那就喝夜晚的酒。', '153');
INSERT INTO `comment1_table` VALUES ('3', 'http://127.0.0.1:3001/hichat/tx1.png', '荣木阳', '我在。', '68');
INSERT INTO `comment1_table` VALUES ('4', 'http://127.0.0.1:3001/hichat/tx5.png', '陌笙', '“什么最暖心的话？我去给你买奶茶了，坐着等我，别出来，天冷。”', '43');
INSERT INTO `comment1_table` VALUES ('5', 'http://127.0.0.1:3001/hichat/tx3.png', '薄荷味橘子糖', '我没有很刻意的去想你，因为我知道，遇到了就该感恩，路过了就需要释怀。我只是在很多很多的小瞬间想起你，比如一部电影，一首歌，一条马路和无数个闭上眼睛的瞬间。', '28');

-- ----------------------------
-- Table structure for comment2_table
-- ----------------------------
DROP TABLE IF EXISTS `comment2_table`;
CREATE TABLE `comment2_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(15) NOT NULL,
  `text` varchar(200) NOT NULL,
  `agree` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment2_table
-- ----------------------------
INSERT INTO `comment2_table` VALUES ('1', 'http://127.0.0.1:3001/hichat/tx3.png', '决明子', '有短时间，我室友晚上三点多睡，早上七点半还要起来上课，然后有一天早上他突然对我说：“我觉得我马上就要死了！”', '234');
INSERT INTO `comment2_table` VALUES ('2', 'http://127.0.0.1:3001/hichat/tx2.png', '金妍儿', '我身边真的很多这样的夜猫子，半夜四点睡，早上七点钟就能起来。', '76');
INSERT INTO `comment2_table` VALUES ('3', 'http://127.0.0.1:3001/hichat/tx1.png', 'Eterity.', '我本人就是，天天熬夜但还是精神很好，但楼主还是不要羡慕，时间长了对身体不好。可能短时间内没什么感觉，但是时间长了毛病就全出来了。', '63');
INSERT INTO `comment2_table` VALUES ('4', 'http://127.0.0.1:3001/hichat/tx5.png', '花小小', '我在努力调整，可是不行，熬夜已经成为习惯。', '25');

-- ----------------------------
-- Table structure for comment3_table
-- ----------------------------
DROP TABLE IF EXISTS `comment3_table`;
CREATE TABLE `comment3_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(15) DEFAULT NULL,
  `text` varchar(200) NOT NULL,
  `agree` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment3_table
-- ----------------------------
INSERT INTO `comment3_table` VALUES ('1', 'http://127.0.0.1:3001/hichat/tx5.png', '镇魂女孩', '老了老了 ，只听说过弧短，哈哈哈，新书影帝家的小狼狗很好看哦~', '219');
INSERT INTO `comment3_table` VALUES ('2', 'http://127.0.0.1:3001/hichat/tx2.png', '安', '经常用基本操作这句，欧洲人没听过，但我不是00后，嘿嘿嘿', '107');
INSERT INTO `comment3_table` VALUES ('3', 'http://127.0.0.1:3001/hichat/tx1.png', '无可奉告', '00后的我话说我也是00后，除了那个战五渣之外，别的一律不懂', '47');
INSERT INTO `comment3_table` VALUES ('4', 'http://127.0.0.1:3001/hichat/tx6.png', '卜娜娜', 'cqy?我们一般都说扩列2333所以这就是我90后的原因么？', '16');

-- ----------------------------
-- Table structure for girls_carousel_table
-- ----------------------------
DROP TABLE IF EXISTS `girls_carousel_table`;
CREATE TABLE `girls_carousel_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of girls_carousel_table
-- ----------------------------
INSERT INTO `girls_carousel_table` VALUES ('1', 'http://127.0.0.1:3001/carousel/girls1.png');
INSERT INTO `girls_carousel_table` VALUES ('2', 'http://127.0.0.1:3001/carousel/girls2.png');
INSERT INTO `girls_carousel_table` VALUES ('3', 'http://127.0.0.1:3001/carousel/girls3.png');

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
INSERT INTO `girls_table` VALUES ('6', 'http://127.0.0.1:3001/bookcheng/nv6.png', '甜田小厨娘', '刘大锤');
INSERT INTO `girls_table` VALUES ('7', 'http://127.0.0.1:3001/bookcheng/nv7.png', '我的美女俏总裁', '我吃小苹果');
INSERT INTO `girls_table` VALUES ('8', 'http://127.0.0.1:3001/bookcheng/nv8.png', '医女狂妃', '雪月夜');

-- ----------------------------
-- Table structure for hichat_table
-- ----------------------------
DROP TABLE IF EXISTS `hichat_table`;
CREATE TABLE `hichat_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  `pic_src` varchar(255) NOT NULL,
  `read` int(11) DEFAULT NULL,
  `talk` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hichat_table
-- ----------------------------
INSERT INTO `hichat_table` VALUES ('1', '讨论：最暖心的一句话', 'http://127.0.0.1:3001/hichat/1.png', '2763', '356');
INSERT INTO `hichat_table` VALUES ('2', '你身边真的有人睡三四个小时', 'http://127.0.0.1:3001/hichat/2.png', '358', '159');
INSERT INTO `hichat_table` VALUES ('3', '00后黑话宝典，你知道多少？', 'http://127.0.0.1:3001/hichat/3.png', '1693', '268');

-- ----------------------------
-- Table structure for original_carousel_table
-- ----------------------------
DROP TABLE IF EXISTS `original_carousel_table`;
CREATE TABLE `original_carousel_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of original_carousel_table
-- ----------------------------
INSERT INTO `original_carousel_table` VALUES ('1', 'http://127.0.0.1:3001/carousel/yc1.png');
INSERT INTO `original_carousel_table` VALUES ('2', 'http://127.0.0.1:3001/carousel/yc2.png');
INSERT INTO `original_carousel_table` VALUES ('3', 'http://127.0.0.1:3001/carousel/yc3.png');
INSERT INTO `original_carousel_table` VALUES ('4', 'http://127.0.0.1:3001/carousel/yc4.png');

-- ----------------------------
-- Table structure for original_recommend_table
-- ----------------------------
DROP TABLE IF EXISTS `original_recommend_table`;
CREATE TABLE `original_recommend_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `pic_src` varchar(255) NOT NULL,
  `book_name` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of original_recommend_table
-- ----------------------------
INSERT INTO `original_recommend_table` VALUES ('1', 'http://127.0.0.1:3001/yctj/1.png', '至尊股神');
INSERT INTO `original_recommend_table` VALUES ('2', 'http://127.0.0.1:3001/yctj/2.png', '校花的特殊保镖');
INSERT INTO `original_recommend_table` VALUES ('3', 'http://127.0.0.1:3001/yctj/3.png', '修仙归来');
INSERT INTO `original_recommend_table` VALUES ('4', 'http://127.0.0.1:3001/yctj/4.png', '甜田小厨娘');

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
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

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
INSERT INTO `user_table` VALUES ('33', '18332232939', '19980304');
INSERT INTO `user_table` VALUES ('34', '13231832728', '123456');

-- ----------------------------
-- Table structure for wanjie_carousel_table
-- ----------------------------
DROP TABLE IF EXISTS `wanjie_carousel_table`;
CREATE TABLE `wanjie_carousel_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wanjie_carousel_table
-- ----------------------------
INSERT INTO `wanjie_carousel_table` VALUES ('1', 'http://127.0.0.1:3001/carousel/wj1.png');
INSERT INTO `wanjie_carousel_table` VALUES ('2', 'http://127.0.0.1:3001/carousel/wj2.png');
INSERT INTO `wanjie_carousel_table` VALUES ('3', 'http://127.0.0.1:3001/carousel/wj3.png');
