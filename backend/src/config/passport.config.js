import argon2 from 'argon2';
import passportJWT from 'passport-jwt';
import passportLocal from 'passport-local';
import User from '../schemas/user.schema.js';

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = passportLocal.Strategy;
const JWTStrategy = passportJWT.Strategy;

const localStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async (email, password, cb) => User.findOne({email}).then(async (user) => {
        if(!user) {
            return cb(null, false, {
                errors: [
                    {
                        msg: 'Invalid email or password'
                    }
                ]
            });
        }
        let correctPassword = await argon2.verify(user.passwordHash, password);
        if(!correctPassword) {
            return cb(null, false, {
                errors: [
                    {
                        msg: 'Invalid email or password'
                    }
                ]
            });
        }
        return cb(null, { id: user._id, email: user.email }, {
            msg: 'Login successfully'
        })
    })
    .catch(err => cb(null, false, {
        errors: [
            {
                msg: err
            }
        ]
    }))
);

const jwtStrategy = new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.AT_SECRET
},
(jwtPayload, cb) => {
    User.findById(jwtPayload.id)
        .then(user => cb(null, user))
        .catch(err => cb(err))
});

export default {
    localStrategy,
    jwtStrategy
}