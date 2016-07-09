//===============================================================================
//	@description: 加载依赖模块
//===============================================================================
var express  = require('express');
var commandm = require('../../model/commandModel');
var router   = express.Router();


// 列表
router.get('/', function(req, res, next) {
	commandm.list(req, res, next, function(result) {
		res.render('home/index', { title: '欢迎访问首页', result: result});
	});
	
});

module.exports = router;