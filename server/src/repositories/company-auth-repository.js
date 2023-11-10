const { StatusCodes } = require('http-status-codes');
const { CompanyAuthModel } = require('../models/index');
const { AppError } = require('../utils/errors');

class CompanyAuthRepository {

    async createUser(userDetails) {
        try {
            const user = new CompanyAuthModel(userDetails);
            return await user.save();
        } catch (error) {
            if (error.code === 11000 || error.code === 11001) {
                // Error code 11000 and 11001 represents a duplicate key error (MongoDB error)
                throw new AppError({
                    name: 'DuplicateEmailError',
                    message: 'Email address is already in use',
                    explanation: 'The provided email address is already associated with an existing user.',
                    statusCode: StatusCodes.CONFLICT,
                });
            }

            throw new AppError({
                name: 'RepositoryError',
                message: 'Not able to create new User',
                explanation: 'There was some issue with creating new User, try againg later',
                statusCode: StatusCodes.INTERNAL_SERVER_ERROR
            })
        }
    }

}

module.exports = CompanyAuthRepository;