var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
var expressSession = require('express-session');
app.use(expressSession({resave: false, saveUninitialized: false, secret: '1q2w3e4r5t'}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// play with sessions
app.get('login', function(req, res, next) {
  res.render('login');
})

app.post('/login', function(req, res, next){
  if(req.session.name){
    res.send('<br/> The menu page<br/><a href="/logout">Logout</a>');
  }
  else{
    res.send('<br/> Nope!<br/><a href="/login">Login</a>')
  }
})

app.get(/\/menu*|\/dashboard*/, function(req, res, next){
  if(req.session.name){
    res.send('<br/> The menu page<br/><a href="/logout">Logout</a>');
  }
  else{
    res.send('<br/> Nope!<br/><a href="/login">Login</a>')
  }
})

app.get(/\/home|\/$/, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/login/:username', function(req, res, next) {
  req.session.name = req.params.username;
  res.render('index', { title: req.params.username });
  res.send('<p>Session: <a href="/username">View Session Info</a></p>')
});

app.get('/logout', function(req, res){
  req.session.destroy();
  res.send('<br/>Session destroyed!<br/><a href="/username">Check Session</a>')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
