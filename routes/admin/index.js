var express = require('express');
var router = express.Router();

// 后台首页
router.get('/', function(req, res, next) {
  	res.render('admin/index/index', { title: '后台首页' });
});


router.get('/login', function(req, res, next) {
	res.send('返回后台login');
});

module.exports = router;