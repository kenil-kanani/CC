const { StatusCodes } = require('http-status-codes');
const { CompanyAuthService } = require('../services/index')

const companyAuthService = new CompanyAuthService();

const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const response = await companyAuthService.createUser({ email, password });
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'User created successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong",
            data: {},
            error: error
        });
    }
}

module.exports = {
    createUser,
}