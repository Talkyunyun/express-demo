//===============================================================================
//	@description: 加载依赖模块
//===============================================================================
var express  = require('express');
var commandm = require('../../model/commandModel');
var router   = express.Router();

// 处理表单数据
router.post('/', function(req, res, next) {
	commandm.add(req, res, next);
});

module.exports = router;
