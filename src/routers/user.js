const express = require('express');
const User = require('../models/user');
const {auth} = require('../middleware/auth');



const router = new express.Router();

router.post('/users', async (req, res, next) => {
    try {
        const user = new User(req.body);
        const t = await user.validate();
        console.log(t)
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ status:"success" });
    } catch (e) {
        next(e)
    }

})
router.post('/users/login', async (req, res, next) => {

    try {
        const user = await User.findByCredentials(req.body.user, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        next(e)
    }
})
router.post('/users/logout', auth, async (req, res, next) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
        await req.user.save();
        res.status(200).send({ status:"success" });
    } catch (e) {
        next(e)
    }
})
router.post('/users/logoutAll', auth, async (req, res, next) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.status(200).send({ status:"success" });
    } catch (e) {
        next(e)
    }
})

router.get('/user/me', auth, async (req, res, next) => {

    try {
        res.send(req.user);
    } catch (e) {
        next(e)
    }
});

router.delete('/users/me', auth, async (req, res, next) => {
    try {
        await req.user.remove();
        sendByeEmail(req.user.email, req.user.name);
        res.send(req.user)
    } catch (e) {
        next(e)
    }
})


module.exports = router;