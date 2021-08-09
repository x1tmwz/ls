const jwt = require('jsonwebtoken');
const User = require('../models/user');
const ApiError = require('../error/ApiError');


const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        // const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const decoded = jwt.verify(token, "tomerkey");
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
        if (!user) throw new Error();
        req.token = token;
        req.user = user;
        next();
    } catch (e) {
        res.status(401).send({ error: 'please authenticate' });
    }
}

const isAdmin = async (req, res, next) => {
        if(req.user.role !== "admin"){
            next(new ApiError("error","you arent admin"))
        }
        next();
}


module.exports =  {auth,isAdmin} ;