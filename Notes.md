# Intro to Express
* Express is based on middleware. You can add or subtract based on your requirement.
* When a request arrives, Express will execute each middleware piece sequentially till the middleware doesn't call the next one.
And at that point, one of the middleware or a route handler returns a response.

# Express-Generator
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
# Express API
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

# Request API
* Request API provides props and methods for handling: query/url strings, http headers, params, cookies.
* Common props in `req` object are body, cookies, params. Similarly req methods are get, is and params.

# Response API
* Response API provides props and methods for replying to client requests.
* Props in `res` object are headersSent and locals.

# Routing in Express
* Routing is handled via `Router` object. Route paths are configured and handled via Router methods.

# Reference
* [Middleware Defintion in SO](https://stackoverflow.com/questions/7337572/what-does-middleware-and-app-use-actually-mean-in-expressjs)
