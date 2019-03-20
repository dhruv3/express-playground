# Intro to Express
* Express is based on middleware. You can add or subtract based on your requirement.
* When a request arrives, Express will execute each middleware piece sequentially till the middleware doesn't call the next one.
And at that point, one of the middleware or a route handler returns a response.

## Express-Generator
```js
npm install express-generator -g
````
* This installs express generator using which we can create Express Apps(with a predefined folder structure aka skeleton).
```js
express myApp
```
* Running Express Generator App:
```js
//change directory:
$ cd myApp

//install dependencies:
$ npm install

//run the app:
$ DEBUG=myapp:* npm start
```
* Folder description:
    * bin: We set up our environment and the server.
    * public: static assets.

* devDependencies: A list of packages required to do development and testing of your project. To create them use following command:
```js
npm install --save-dev mocha
```
## Express API
* express.static serves static content and is based on `serve-static` middleware. 
* We can tell express to pick static content from multiple locations. Code for this:
```js
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'css')));
```
* Express provides Application API using which we can use Express functionality:
    * Templating Engine: app.engine. It uses a middleware template engine to render template file into HTML. JADE is the default template engine.
    * Rendering: app.render. It returns HTML rendered from a view.
    ```js
    res.render('index.jade', {title: 'Test'})
    ```
    * Routing: app.route. Provides routing interface for requests via HTTP verbs.
* Express has `set` method for configuring application setting. Example of settings: case-sensitive routing, views, query parser.

## Request API
* Request API provides props and methods for handling: query/url strings, http headers, params, cookies.
* Common props in `req` object are body, cookies, params. Similarly req methods are get, is and params.

## Response API
* Response API provides props and methods for replying to client requests.
* Props in `res` object are headersSent and locals.

## Routing in Express
* Routing is handled via `Router` object. Route paths are configured and handled via Router methods.

# Using Express and Express Middleware
## Using Middleware
* Express apps rely on using middleware.
* Middleware have access to response and req objects.
* 5 types of middleware:
    ** Application-level middleware: Its bound to app object;
    ** Router-level middleware: Its bound to router object;
    ** Error-handling middleware handles errors, and it's identified by the fact that it has to have four parameters;
    ** Built-In Middleware: There is only one built-in middleware in Express 4.x and above. And that is express.static;
    ** Third Party Middleware
## Express Validator
* Initialize it AFTER `bodyParser`:
```js
var expressValidator =  require('express-validator');
app.use(expressValidator())
```
* Usage of this package:
```js
req.checkBody('postparam', 'Invalid postparam').notEmpty().isInt();
req.checkParams('urlparam', 'Invalid postparam').isAlpha();
```
## Managing Web Interaction
* Using GET verb:
```js
app.get('/api/users/:id/:loc', function(req, res){
  var userId = req.params.id;
  var loc = req.params.loc;
  console.log(req.params);
  res.send('\n\nUserID: ' + userId + ' Location: ' + loc + '\n\n');
})
```
* Using POST verb:
```js
app.post('/api/users', function(req, res){
  var userId = req.body.id;
  var loc = req.body.loc;
  res.send('\n\nUserID: ' + userId + ' Location: ' + loc + '\n\n');
})
```
* Test POST using command: `curl --data "id=1&loc=USA" localhost:3000/api/users`
* Cookie Parser middleware has been implemented in midWareAppOne.

## Session and Authentication
* Generally cookies are used for browser-based session management.
* Session data itself should be stored on the server side, and only a unique identifier is sent between the client and server in the form of a cookie.
* Session data should be considered temporary as cookie could be lost by client or server.

## Advance Routing and Features
* RegEx route must start and end with `/`.
* Path URLs that start with `/` must be escaped using `\`.
* Regex `/[MmE]$/` where square brackets implies any combo is okay and $ sign means end.
* Regex `/\/user|\/users /` where path `/user` or `/users` are okay. Even path like `\users1234` are okay as there's no terminating character in the end.
* Regex `/\/(\d+)/` where path can consist of any number of digits.

## Advanced Functionality
* Creating a HTTPS server you need a SSL certificate and self sign it.
* 
# Reference
* [Middleware Defintion in SO](https://stackoverflow.com/questions/7337572/what-does-middleware-and-app-use-actually-mean-in-expressjs)
