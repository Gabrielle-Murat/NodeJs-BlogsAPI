const jwt = require('jsonwebtoken');
require('dotenv').config();
const BlogPost = require('../services/blogPostsService');

const secret = process.env.JWT_SECRET;

// requisito 12

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const token = req.headers.authorization;
  const decoded = jwt.verify(token, secret);
  const userId = decoded.data.id;

  const response = await BlogPost.createBlogPost(title, content, categoryIds, userId);

  if (response === 'category invalid') {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  return res.status(201).json(response);
};

// requisito 13

const getBlogPosts = async (_req, res) => {
  const response = await BlogPost.getBlogPosts();

  if (!response) return res.status(500).json({ message: 'Something went wrong' });

  return res.status(200).json(response);
};

// requisito 14

const getBlogPostById = async (req, res) => {
  const { id } = req.params;

  const response = await BlogPost.getBlogPostById(id);

  if (!response) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(response);
};

module.exports = {
  createBlogPost,
  getBlogPosts,
  getBlogPostById,
};
