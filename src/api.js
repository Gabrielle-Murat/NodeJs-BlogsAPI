const express = require('express');

const loginRouter = require('./middlewares/loginRouter');
const usersRouter = require('./middlewares/usersRouter');
const categoriesRouter = require('./middlewares/categoriesRouter');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', usersRouter);

app.use('/categories', categoriesRouter);

module.exports = app;
