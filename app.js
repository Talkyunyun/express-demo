//===============================================================================
//	@description: 加载依赖模块
//===============================================================================
var express      = require('express')
	, path         = require('path')
	, favicon      = require('serve-favicon')
	, logger       = require('morgan')
	, cookieParser = require('cookie-parser')
	, bodyParser   = require('body-parser')
	, session		   = require('express-session');
var app = express();


//===============================================================================
//	@description: 设置模板引擎以及模板相关配置
//===============================================================================
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');




//===============================================================================
//	@description: node的一些中间件设置
//===============================================================================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
	secret: 'test',
	name  : 'cookie-name', // 设置cookie的name值，默认cookie的name是：connect.sid
	cookie: {maxAge: 7200},// 设置maxAge是7200ms，cookie过期时间
	resave: false,
	saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));



//===============================================================================
//	@description: 路由配置
//===============================================================================
// 前台路由配置
app.use('/', require('./routes/home/index'));
app.use('/add', require('./routes/home/add'));

app.use('/login', require('./routes/home/login'));



// 后台路由配置
var admin = require('./routes/admin/index');
app.use('/admin', admin);




//===============================================================================
//	@description: 404页面错误处理
//===============================================================================
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



//===============================================================================
//	@description: 开发阶段错误打印调试处理
//===============================================================================
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


//===============================================================================
//	@description: 生成阶段错误处理（不向用户暴漏错误）
//===============================================================================
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;