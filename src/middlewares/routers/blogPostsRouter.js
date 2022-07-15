const express = require('express');

const BlogPost = require('../../controllers/blogPostsController');
const blogPostValidation = require('../auth/blogPostValidation');
const { validateJWT } = require('../auth/tokenValidation');

const router = express.Router();

// requisito 12
router.post('/', blogPostValidation, validateJWT, BlogPost.createBlogPost);

// requisito 13
router.get('/', validateJWT, BlogPost.getBlogPosts);

// requisito 14
router.get('/:id', validateJWT, BlogPost.getBlogPostById);

module.exports = router;
