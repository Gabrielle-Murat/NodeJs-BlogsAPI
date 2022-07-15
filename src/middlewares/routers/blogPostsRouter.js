// requisito 12

const express = require('express');

const BlogPost = require('../../controllers/blogPostsController');
const blogPostValidation = require('../auth/blogPostValidation');
const { validateJWT } = require('../auth/tokenValidation');

const router = express.Router();

router.post('/', blogPostValidation, validateJWT, BlogPost.createBlogPost);

router.get('/', validateJWT, BlogPost.getBlogPosts);

module.exports = router;
