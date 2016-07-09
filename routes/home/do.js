var express = require('express');
var router  = express.Router();

// 导入command表的操作对象
var commandm = require('../../model/commandModel');

// 处理表单数据
router.post('/', function(req, res, next) {
	commandm.add(req, res, next);
});

module.exports = router;
