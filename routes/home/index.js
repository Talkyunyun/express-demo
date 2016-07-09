var express = require('express');
var router = express.Router();

// 导入command表的操作对象
var commandm = require('../../model/commandModel');


// 列表
router.get('/', function(req, res, next) {
	commandm.list(req, res, next, function(result) {
		res.render('home/index', { title: '欢迎访问首页', result: result});
	});
	
});

module.exports = router;
