**Node.js and Express.js Custom Error Handler**

Error handling is one of the most important issues in a web application. You catch errors in asynchronous codes with the `try {} catch (err) {return next(err)}` structure and send them to the custom error handler middleware. This repository provides a custom custom error handler middleware that handles the error and sends the error with the custom message and error status code. The file where this middleware is kept is called `customErrorHandler` and you must include it in your main file (like index.js) to use it:

`const customErrorHandler = require("./customErrorHandler.js");`

After you should use in the your main file (like index.js) because that is a middleware:

`app.use(customErrorHandler)`

**File Structure:**

+ `CustomError.js`: The CustomError class was created using the Error class. The Error class had the message property but not the status code property. CustomError class got status code property. Include this file wherever you want to send custom error message and status code. Then create a new CustomError message and send it 
to the `customErrorHandler` with `next()`. The middleware in that file will catch the error and return it to the user. Like that:

```
if(!userInput){
   return next(new CustomError("Check Your Inputs", 400))
};
```

+ `customErrorHandler.js`: customErrorHandler is a middleware. It keeps Error as a parameter. "let customError = err;" code throws the incoming error information to customError. Then a new error message is generated with the CustomError class according to the error name or code. 

+ index.js

