import argon2 from 'argon2';
import express from 'express';
import { v4 } from 'uuid';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import User from '../../schemas/user.schema.js';
import {check, validationResult} from 'express-validator';
import sendConfirmationMail from "../../config/mail.config.js";
const router = express.Router();

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
    user.confirmationCode = v4();

    user.save().then(u => {
        sendConfirmationMail(user.name, user.email, user.confirmationCode);
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
                auth_token: jwt.sign(user, process.env.AT_SECRET, { expiresIn: '1w' }),
            })
        })
    })(req, res);

});

router.post('/confirm', (req, res) => {
    let code = req.query.code;
    User.findOne({
        confirmationCode: code
    }).then(u => {
        if(!u)
            return res.status(404).json({ errors: [ { msg: 'Invalid confirmation code!' } ] });
        if(u.confirmed)
            return res.status(404).json({ errors: [ { msg: 'Account already confirmed!' } ] });
        u.confirmed = true;
        u.save()
            .then(() => res.status(200).json({ msg: 'Account confirmed!' }))
            .catch(err => {
                return res.status(500).json({ errors: [ { msg: err } ] });
            });
    }).catch(err => {
        return res.status(500).json({ errors: [ { msg: err } ] });
    })
});

export default router;
