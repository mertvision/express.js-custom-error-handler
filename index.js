// Express Server. 
// CustomError class and customErrorHandler middleware was included.

const express = require("express");
const CustomError = require("./CustomError.js");
const customErrorHandler = require("./customErrorHandler.js");
const app = express();

// A test route has been created for the error.

app.get('/errorTest', (req, res, next)=>{
     return next(new CustomError("Error", 404));
});

const PORT = 3000;

// The customErrorHandler middleware was included as app.use(customErrorHandler()).

app.use(customErrorHandler);

app.listen(PORT, ()=> {
    console.log(`Server is running..`);
});