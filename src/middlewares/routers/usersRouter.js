const express = require('express');

const User = require('../../controllers/usersController');
const userValidation = require('../auth/userValidation');
const { validateJWT } = require('../auth/tokenValidation');

const router = express.Router();

// requisito 4
router.post('/', userValidation, User.createUser);

// requisito 5
router.get('/', validateJWT, User.getUsers);

// requisito 6
router.get('/:id', validateJWT, User.getUserById);

module.exports = router;
