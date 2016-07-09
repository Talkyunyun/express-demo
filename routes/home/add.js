//===============================================================================
//	@description: 加载依赖模块
//===============================================================================
var express = require('express');
var router  = express.Router();


// 添加表单
router.get('/', function(req, res, next) {
	res.render('home/add');
});

module.exports = router;
