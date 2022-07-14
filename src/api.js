const express = require('express');

const loginRouter = require('./middlewares/routers/loginRouter');
const usersRouter = require('./middlewares/routers/usersRouter');
const categoriesRouter = require('./middlewares/routers/categoriesRouter');
const blogPostsRouter = require('./middlewares/routers/blogPostsRouter');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', usersRouter);

app.use('/categories', categoriesRouter);

app.use('/post', blogPostsRouter);

module.exports = app;
