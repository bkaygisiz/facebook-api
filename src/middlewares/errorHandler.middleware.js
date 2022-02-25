class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }

     handleError = (err, res) => {
        const { statusCode, message } = err;
        res.status(statusCode).json({
            status: 'error',
            statusCode,
            message
        })
    }
}

export default { ErrorHandler };