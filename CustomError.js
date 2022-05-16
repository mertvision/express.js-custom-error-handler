// The CustomError class was created using the Error class.
// The Error class had the message property but not the status code property. CustomError class got status code property.

class CustomError extends Error {
    constructor(message,status){
        super(message);
        this.status = status;
    };
};

// CustomError export.

module.exports = CustomError;