const express = require('express');

const BlogPost = require('../../controllers/blogPostsController');
const blogPostCreationValidation = require('../auth/blogPostCreationValidation');
const blogPostUpdateValidation = require('../auth/blogPostUpdateValidation');
const { validateJWT } = require('../auth/tokenValidation');

const router = express.Router();

// requisito 12
router.post('/', blogPostCreationValidation, validateJWT, BlogPost.createBlogPost);

// requisito 13
router.get('/', validateJWT, BlogPost.getBlogPosts);

// requisito 14
router.get('/:id', validateJWT, BlogPost.getBlogPostById);

// requisito 15
router.put('/:id', validateJWT, blogPostUpdateValidation, BlogPost.updateBlogPost);

// requisito 16
router.delete('/:id', validateJWT, BlogPost.deleteBlogPost);

module.exports = router;
