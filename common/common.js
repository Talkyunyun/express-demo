module.exports = {
    extend: function(target, source, flag) {
        for(var key in source) {
            if(source.hasOwnProperty(key))
                flag ?
                    (target[key] = source[key]) :
                    (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
    },
    
    // json格式输出到前端
    output: function(res, result) {
    	if (typeof result == 'undefined') {
    		res.json({code: 0, 'msg': '操作失败'});
    	} else {
    		res.json(result);
    	}
    }
};