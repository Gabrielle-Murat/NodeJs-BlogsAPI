const express = require('express');

const loginRouter = require('./middlewares/loginRouter');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

module.exports = app;
