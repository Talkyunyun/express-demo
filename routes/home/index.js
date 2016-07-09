var express = require('express');
var router = express.Router();

// 首页
router.get('/', function(req, res, next) {
  res.render('home/index', { title: '欢迎访问首页' });
});

module.exports = router;
