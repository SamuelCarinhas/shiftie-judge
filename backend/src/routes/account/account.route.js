const express = require('express');
const {check, validationResult} = require('express-validator');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../../schemas/user.schema');
const argon2 = require('argon2');

router.post('/register', async (req, res) => {
    await check('email')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('Email cannot be empty')
        .bail()
        .isEmail()
        .withMessage('Email is not valid')
        .bail()
        .run(req);
    await check('password')
        .isLength({ min: 6 })
        .withMessage('Password needs to have at least 6 characters')
        .run(req);
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json(errors);
    let user = new User(req.body);
    user.passwordHash = await argon2.hash(req.body.password);
    user.save().then(u => {
        res.status(201).json({
            msg: 'Account created'
        });
    }).catch(err => {
        res.status(500).json({
            errors: [
                {
                    msg: err
                }
            ]
        });
    })
});

router.post('/login', async (req, res) => {
    await check('email')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('Email cannot be empty')
        .bail()
        .run(req);
    await check('password')
        .not()
        .isEmpty()
        .withMessage('Password cannot be empty')
        .run(req);
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json(errors);

    passport.authenticate('local', { session: false }, (err, user, info) => {
        if(err || !user)
            return res.status(400).json(info);

        req.login(user, { session: false }, (err) => {
            if(err)
                return res.status(500).json({
                    errors: [ { msg: err } ]
                })

            return res.status(200).json({
                user,
                auth_token: jwt.sign(user, process.env.AT_SECRET, { expiresIn: '1m' }),
            })
        })
    })(req, res);

});

module.exports = router;