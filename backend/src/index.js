require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParse = require('cookie-parser');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();

require('./config/passport.config');

// ROUTES
const account = require('./routes/account/account.route')
const test = require('./routes/test.route');

const mongoose = require("mongoose");

const PORT = process.env.PORT;
const DB_CONN = process.env.DB_CONN;

mongoose.connect(DB_CONN)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(`DATABASE ERROR: ${err}`));

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParse());

app.use('/account', account);
app.use('/test', passport.authenticate('jwt', { session: false }), test);

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});