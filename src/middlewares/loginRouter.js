// requisito 3

const express = require('express');

const Login = require('../controllers/loginController');
const loginValidation = require('./loginValidation');

const router = express.Router();

router.post(
  '/',
  loginValidation,
  Login.postLogin,
);

module.exports = router;
