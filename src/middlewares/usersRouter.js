const express = require('express');

const User = require('../controllers/usersController');
const userValidation = require('./userValidation');

const router = express.Router();

// requisito 4
router.post('/', userValidation, User.createUser);

module.exports = router;
