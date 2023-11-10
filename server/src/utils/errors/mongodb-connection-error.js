const { StatusCode } = require('http-status-codes');

class DBConnectionError extends Error {
    constructor(error) {
        super(error);
        this.name = 'DBConnectionError';
        this.message = 'Not able to connect to database.'
        this.explanation = "Database Server is not responding. Please try again later.";
        this.statusCode = StatusCode.INTERNAL_SERVER_ERROR;
    }
}

module.exports = DBConnectionError;