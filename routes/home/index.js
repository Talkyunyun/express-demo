//===============================================================================
//	@description: 加载依赖模块
//===============================================================================
var express  = require('express');
var $common  = require('../../common/common');
var commandm = require('../../model/commandModel');
var router   = express.Router();


// 列表
router.get('/', function(req, res, next) {
	commandm.list(req, res, next, function(result) {
		res.render('home/index', { title: '欢迎访问首页', result: result});
	});
	
});

// 删除记录操作
router.get('/del', function(req, res, next) {
	commandm.del(req, res, next, function(result) {
		$common.alert(res, result.msg);
	});
});

module.exports = router;