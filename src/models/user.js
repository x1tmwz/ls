const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError')




const userSchema = new mongoose.Schema({
    user: {
        type: String,
        trim: true,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('please dont enter password as password')
            }
        }
    },
    firstName: {
        type: String,
        trim: true,
        require: true,
    },
    lastName: {
        type: String,
        trim: true,
        require: true,
    },
    role: { type: String, default: 'user'},
    tokens: [{
        token: {
            type: String,
            required: true
        }

    }],
}, {
    timestamps: true
})



userSchema.methods.generateAuthToken = async function () {
    const user = this;
    // const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
    const token = jwt.sign({ _id: user._id.toString() }, "tomerkey");
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
}
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens;
    return userObject;
}

userSchema.statics.findByCredentials = async (user, password) => {
    const userFound = await User.findOne({ user });
    if (!userFound) {
        throw new ApiError(200,"Email is not exitis");
    }
    const isMatchPassword = await bcrypt.compare(password, userFound.password);
    if (!isMatchPassword) {
        throw new ApiError(200,'Unbale To login');
    }
    return userFound;
}


//hash from plain text password middleweahr
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})
//delet your task when user is removed
userSchema.pre('remove', async function (next) {
    const user = this;
    await Task.deleteMany({ owner: user._id });
    next();
})



const User = mongoose.model('User', userSchema)
module.exports = User;