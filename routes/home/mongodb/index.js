var express = require('express');
var mongodb = require('mongodb');
var router  = express.Router();

//===============================================================================
//	@description: mongodb数据库连接配置
//===============================================================================
var mongoServer = new mongodb.Server('localhost', 27017, {auto_reconnect: true});
var mongom		= new mongodb.Db('express', mongoServer, {safe: true});

// 添加表单
router.get('/', function(req, res, next) {
  	res.render('home/add');
});


// 处理表单数据
router.post('/', function(req, res, enxt) {
	var name    = req.body.name;
	var command = req.body.command;
	if (!name && !command) {
		res.redirect('/add');
	}
	
	// 打开mongodb数据库
	mongom.open(function(err, db) {
		if (err) {
			console.log(err);
		} else {
			// 选择集合
			db.createCollection('bdddb', {safe: true}, function(err, collection) {
				if (err) {
					console.log(err);
				} else {
					// 新增数据
					var data = {name:name, command:command};
					collection.insert(data, {safe: true}, function(err, result) {
						console.log(result);
					});
				}
			});
		}
	});
	
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
