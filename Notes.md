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

# Reference
* [Middleware Defintion in SO](https://stackoverflow.com/questions/7337572/what-does-middleware-and-app-use-actually-mean-in-expressjs)
