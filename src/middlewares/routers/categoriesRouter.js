const express = require('express');

const Category = require('../../controllers/categoriesController');
const { validateJWT } = require('../auth/tokenValidation');
const categoryValidation = require('../auth/categoryValidation');

const router = express.Router();

// requisito 8
router.post('/', categoryValidation, validateJWT, Category.createCategory);

// requisito 9
router.get('/', validateJWT, Category.getCategories);

module.exports = router;
