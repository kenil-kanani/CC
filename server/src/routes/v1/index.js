const express = require("express");
const router = express.Router();

const { CompanyAuthController } = require('../../controllers/index')


router.post(
    '/signup',
    CompanyAuthController.createUser
);

module.exports = router;