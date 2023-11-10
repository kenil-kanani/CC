const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT } = require('../config/serverConfig');
const { Schema } = mongoose;

const CompanyAuthSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        emailVerified: {
            type: Boolean,
            default: false,
            required: true
        },
        approved: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

CompanyAuthSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password') || user.isNew) {
        try {
            const hash = await bcrypt.hash(user.password, SALT);
            user.password = hash;
            return next();
        } catch (error) {
            return next(error);
        }
    } else {
        return next();
    }
});

const CompanyAuthModel = mongoose.model('CompanyAuth', CompanyAuthSchema);
module.exports = CompanyAuthModel;