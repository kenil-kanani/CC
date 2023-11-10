class AppError extends Error {
    constructor(errObj) {
        super();
        this.name = errObj.name || 'AppError';
        this.message = errObj.message || 'Something went wrong';
        this.explanation = errObj.explanation || 'There was some issue with the service, try again later';
        this.statusCode = errObj.statusCode || 500;
    }
}

module.exports = AppError;