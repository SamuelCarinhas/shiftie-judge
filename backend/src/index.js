import cors from 'cors';
import express from 'express';
import mongoose from "mongoose";
import passport from 'passport';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import passportConfig from "./config/passport.config.js";

const app = express();

// Strategies
passport.use(passportConfig.localStrategy);
passport.use(passportConfig.jwtStrategy);

// Routes
import accountRoute from './routes/account/account.route.js';
import courseRoute from "./routes/course/course.route.js";
import submissionRoute from "./routes/submission/submission.route.js";
import problemRoute from "./routes/problem/problem.route.js";

const PORT = process.env.PORT;
const DB_CONN = process.env.DB_CONN;

mongoose.connect(DB_CONN)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(`DATABASE ERROR: ${err}`));

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use('/account', accountRoute);
app.use('/course', passport.authenticate('jwt', { session: false }), courseRoute);
app.use('/submission', passport.authenticate('jwt', { session: false }), submissionRoute);
app.use('/problem', passport.authenticate('jwt', { session: false }), problemRoute);

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});