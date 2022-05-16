// CustomError class was included.

const CustomError = require("./CustomError");

// customErrorHandler is a middleware. It keeps Error as a parameter. 
// "let customError = err;" code throws the incoming error information to customError. 
// Then a new error message is generated with the CustomError class according to the error name or code.

const customErrorHandler = (err, req, res, next) => {

    let customError = err;

    if(err.name === "SyntaxError") {
         customError = new CustomError("Unexpected Syntax", 400)
     }
    if (err.name === "ValidationError") {
        customError = new CustomError(err.message, 400)
    };
    if (err.code === 11000) {
        customError = new CustomError("Duplicate Key Found: Check Your Input", 400)
    }

    res.status(customError.status || 500).json({
        success: false,
        message: customError.message 
    })
};

// customErrorHandler middleware export.

module.exports = customErrorHandler;