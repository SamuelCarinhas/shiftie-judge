const passport = require('passport');
const passportJWT = require('passport-jwt');
const argon2 = require('argon2');
const User = require('../schemas/user.schema');

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;

passport.use(new LocalStrategy({
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
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.AT_SECRET
},
(jwtPayload, cb) => {
    User.findById(jwtPayload.id)
        .then(user => cb(null, user))
        .catch(err => cb(err))
}));
