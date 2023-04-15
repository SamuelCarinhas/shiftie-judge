require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParse = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

const test = require('./routes/test.route');

const PORT = process.env.PORT;

app.use('/test', test);

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParse());

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});