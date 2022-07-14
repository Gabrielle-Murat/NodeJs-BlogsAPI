const express = require('express');

const loginRouter = require('./middlewares/loginRouter');
const usersRouter = require('./middlewares/usersRouter');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', usersRouter);

module.exports = app;
