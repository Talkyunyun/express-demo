//===============================================================================
//	@description: 公共函数定义
//===============================================================================
module.exports = {
    // json格式输出到前端
    output: function(res, result) {
    	if (typeof result == 'undefined') {
    		res.json({code: 0, 'msg': '操作失败'});
    	} else {
    		res.json(result);
    	}
    },
    // 提示函数
    alert: function (res, msg) {
    	res.send("<script>alert('"+ msg +"');</script>");
    }
};