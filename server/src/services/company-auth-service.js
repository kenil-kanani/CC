const { StatusCodes } = require('http-status-codes');
const { CompanyAuthRepository } = require('../repositories/index');
const { ServiceError, ValidationError } = require('../utils/errors');
const { isStrongPassword } = require('../utils/index');

class CompanyAuthService {
    constructor() {
        this.companyAuthRepository = new CompanyAuthRepository;
    }

    async createUser(userDetails) {
        try {
            if (!isStrongPassword(userDetails.password)) {
                throw new ValidationError({
                    name: 'ValidationError',
                    message: 'Invalid password format',
                    explanation: 'The password must include a special character, a number, an uppercase letter, a lowercase letter, and be between 8 and 20 characters long.',
                    statusCode: StatusCodes.BAD_REQUEST,
                });
            }
            return await this.companyAuthRepository.createUser(userDetails);
        } catch (error) {
            if (error.name === 'RepositoryError') throw error;
            if (error.name === 'DuplicateEmailError') throw error;
            if (error.name === 'ValidationError') throw error;
            throw new ServiceError();
        }
    }
}

module.exports = CompanyAuthService;