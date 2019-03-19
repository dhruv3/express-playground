var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

//cookie parser
//set up cookie parser
app.use(cookieParser());
//set a cookie
app.get('/', function(req, res){
  //check if client sent cookie
  var cookie = req.cookies.cookieName;
  if(cookie == undefined){
    //if it doesn't exist then create a new cookie
    var randNum = Math.random().toString();
    randNum = randNum.substring(2, randNum.length);
    res.cookie('cookieName', randNum, {maxAge: 90000, httpOnly: true});
    console.log('Cookie Created Successfully');  
  }
  else{
    console.log('Cookie Exists', cookie); 
  }
  res.send('You created a cookie (or one existed): ' + req.cookies.cookieName);
})

app.get('/del', function(req, res){
  res.clearCookie(req.cookies.cookieName);
  res.send("You cleared your cookie.");
})

//GET verb
app.get('/api/users/:id/:loc', function(req, res){
  var userId = req.params.id;
  var loc = req.params.loc;
  console.log(req.params);
  res.send('\n\nUserID: ' + userId + ' Location: ' + loc + '\n\n');
})

//POST verb
app.post('/api/users', function(req, res){
  var userId = req.body.id;
  var loc = req.body.loc;
  res.send('\n\nUserID: ' + userId + ' Location: ' + loc + '\n\n');
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
