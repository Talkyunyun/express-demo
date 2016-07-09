var express = require('express');
var router  = express.Router();


// 添加表单
router.get('/', function(req, res, next) {
	res.render('home/add');

	
	// get参数获取
	//	var name = req.query.name;
	// post参数获取
	//	var name = req.body.name;
	//	res.send(name);
});

// 测试
router.use(function(req, res, next) {
	req.query['name'] = 'name';
	console.info('ksdjfkdsjksfkdsfk');
	// next的作用是将请求转发，这个必须有，如果没有，请求到这就挂起了
	next();
});



module.exports = router;
