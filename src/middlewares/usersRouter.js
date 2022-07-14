const express = require('express');

const User = require('../controllers/usersController');
const userValidation = require('./userValidation');
const { validateJWT } = require('./auth/tokenValidation');

const router = express.Router();

// requisito 4
router.post('/', userValidation, User.createUser);

// requisito 5
router.get('/', validateJWT, User.getUsers);

module.exports = router;
