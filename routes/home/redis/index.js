var express = require('express');
var redis   = require('redis');
var router  = express.Router();

//===============================================================================
//	@description: redis缓存连接和全局配置，使用请参考/routes/redis/redis.js文件
//	连接redis数据库，createClient(port, host, options);
//	如果redis在本机，端口也是默认，直接写createClient()即可
//===============================================================================
var redism = redis.createClient(6379, '127.0.0.1', {});
var set_key_redis = 'SREDIS_KEY';

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
	
	// 使用redis的集合来保存数据
	redism.sadd(set_key_redis, );
	redism.hset(hash_key_redis, 'name', name);
	redism.hset(hash_key_redis, 'command', command);
	
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
