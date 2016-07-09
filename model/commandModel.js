var mysql   = require('mysql');
var $common = require('../common/common');
var $conf   = require('../conf/conf');
var $sql    = require("./commandSql");

// 使用连接池，提升性能
var pool    = mysql.createPool($conf.mysql);
var commandm = {
	
	// 添加记录
	add : function(req, res, next) {
		var name    = req.body.name;
		var command = req.body.command;
		var ctimed  = Math.floor(Date.now()/1000);
		
		pool.getConnection(function(err, connection) {
			if (err) {
				console.log('数据库连接错误：' + err);
				return false;
			}
			
			connection.query($sql.insert, [name, command, ctimed], function(err, result) {
				if (err) {
					console.log("插入记录错误：" + err);
					result = {code: 0, msg: '添加失败'};
				}
				
				// 返回json数据给前端
				$common.output(res, result);
				// 释放连接
				connection.release();
			});
		});
	}
}
module.exports = commandm;
