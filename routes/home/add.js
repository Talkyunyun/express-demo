var express = require('express');
var router  = express.Router();

// 导入command表的操作对象
var commandm = require('../../model/commandModel');



// 添加表单
router.get('/', function(req, res, next) {
	res.render('home/add');


	// get参数获取
	//	var name = req.query.name;
	// post参数获取
	//	var name = req.body.name;
	//	res.send(name);
});


// 处理表单数据
router.post('/', function(req, res, enxt) {
	var result = commandm.add(req, res, next);
	
	
	
	res.send('<script>alert("设置成功")</script>');
});


// 测试
router.use(function(req, res, next) {
	req.query['name'] = 'name';
	console.info('ksdjfkdsjksfkdsfk');
	// next的作用是将请求转发，这个必须有，如果没有，请求到这就挂起了
	next();
});



module.exports = router;
