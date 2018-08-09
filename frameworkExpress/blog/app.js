const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const partials = require("express-partials");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const vipRouter = require("./routes/vip")
const postRouter = require("./routes/post");
const regRouter = require("./routes/reg");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout")

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set("view options",{
  layout: true
})
app.use(partials());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', indexRouter);
//用户页的路由
app.get('/users', usersRouter);
// vip的路由
app.get("/vip", vipRouter);
// 发表信息页的路由
app.post("/post",postRouter);
// 注册页的路由
app.get("/reg",regRouter);
app.post("/reg",regRouter);
// 登录页的路由
app.get("/login",loginRouter);
app.post("/login",loginRouter);
// 退出登录的路由
app.get("/logout",logoutRouter);

// 用户个人中心页的路由
app.get("/users/:username", (req, res, next) => {
  res.send("user: " + req.params.username);
  next()
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
