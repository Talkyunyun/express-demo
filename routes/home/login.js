//===============================================================================
//	@description: 加载依赖模块
//===============================================================================
var express = require('express');
var router = express.Router();

// 登录页面
router.get('/', function(req, res, next) {
  res.render('home/login/index');
});

module.exports = router;