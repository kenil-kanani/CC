const { StatusCodes } = require('http-status-codes');

class ServiceError extends Error {
    constructor() {
        super();
        this.name = 'ServiceError';
        this.message = 'Something went wrong';
        this.explanation = 'There was some issue with the service, try again later';
        this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    }
}

module.exports = ServiceError;