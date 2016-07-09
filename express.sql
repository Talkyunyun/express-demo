# Host: localhost  (Version: 5.5.40)
# Date: 2016-07-09 18:23:26
# Generator: MySQL-Front 5.3  (Build 4.120)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "command"
#

DROP TABLE IF EXISTS `command`;
CREATE TABLE `command` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `command` varchar(255) DEFAULT NULL,
  `ctimed` int(11) unsigned DEFAULT NULL,
  `status` tinyint(1) unsigned DEFAULT '1',
  `utimed` int(11) unsigned DEFAULT NULL COMMENT '最后运行时间',
  `cycle` int(11) unsigned DEFAULT '0' COMMENT '周期，保存时间戳',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='命令表';

#
# Data for table "command"
#

/*!40000 ALTER TABLE `command` DISABLE KEYS */;
INSERT INTO `command` VALUES (1,'添加文件','touch aa.txt',1468055421,1,NULL,0),(2,'删除文件','rm -rf aa.txt',1468055439,0,NULL,0),(3,'测试','hhahahah',1468057427,1,NULL,0),(4,'大大大','点点滴滴',1468059646,1,NULL,0);
/*!40000 ALTER TABLE `command` ENABLE KEYS */;
