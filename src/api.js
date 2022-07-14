const express = require('express');

const loginRouter = require('./middlewares/routers/loginRouter');
const usersRouter = require('./middlewares/routers/usersRouter');
const categoriesRouter = require('./middlewares/routers/categoriesRouter');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', usersRouter);

app.use('/categories', categoriesRouter);

module.exports = app;
