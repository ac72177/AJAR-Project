const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose');
const config = require('config');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/api/users');
const plansRouter = require('./routes/api/plans');
const authRouter = require('./routes/api/auth');

const app = express();

//DB config
const db = config.get('mongoURI');
// connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/plans', plansRouter);
app.use('/api/auth', authRouter);

module.exports = app;
