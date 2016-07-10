//===============================================================================
//	@description: 加载依赖模块
//===============================================================================
var mysql   = require('mysql');
var $common = require('../common/common');
var $conf   = require('../conf/conf');


//===============================================================================
//	@description: SQL语句定义
//===============================================================================
var $sql     = {
	insert   : 'INSERT INTO command(name, command, ctimed, status) VALUES(?, ?, ?, 0)',
	update   : "UPDATE command SET name='更新内容', command='更新命令' WHERE id=?",
	delete   : "DELETE FROM command WHERE id=?",
	queryById: "SELECT * FROM command WHERE id=?",
	queryAll : 'SELECT * FROM command ORDER BY ctimed desc'
};


//===============================================================================
//	@description: 使用连接池，提升性能
//===============================================================================
var pool    = mysql.createPool($conf.mysql);


//===============================================================================
//	@description: 命令表操作对象
//===============================================================================
var commandm = {
	// 获取列表
	list: function(req, res, next, callback) {
		pool.getConnection(function(err, connection) {
			if (err) {
				console.log("数据库连接错误：" + err);
			} else {
				connection.query($sql.queryAll, function(err, result) {
					if (err) {
						console.log("获取记录失败：" + err);
					} else {
						connection.release();
						callback(result);
					}
				});
			}
		});
	},
	// 删除操作
	del: function(req, res, next, callback) {
		pool.getConnection(function(err, connection) {
			if (err) {
				callback({code: 0, msg: '删除失败'});
			} else {
				connection.query($sql.delete, [req.query.id], function(err, result) {
					if (err) {
						callback({code: 0, msg: '删除失败'});
					} else {
						connection.release();
						callback({code: 200, msg: '删除成功'});
					}
				});
			}
		});
	},
	// 添加记录
	add : function(req, res, next) {
		var name    = req.body.name;
		var command = req.body.command;
		var ctimed  = Math.floor(Date.now()/1000);
		
		if (!name && !command) {
			$common.alert(res, '请输入参数');
			return;
		}
		
		pool.getConnection(function(err, connection) {
			if (err) {
				console.log("数据库连接错误：" + err);
			} else {
				connection.query($sql.insert, [name, command, ctimed], function(err, result) {
					if (err) {
						console.log("添加失败：" + err);
					} else {
						$common.alert(res, "添加成功");
						// 释放连接
						connection.release();
						return;
					}
				});
			}
		});
	}
}

module.exports = commandm;