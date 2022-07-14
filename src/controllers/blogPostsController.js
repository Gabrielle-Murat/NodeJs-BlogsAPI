const jwt = require('jsonwebtoken');
require('dotenv').config();
const BlogPost = require('../services/blogPostsService');

const secret = process.env.JWT_SECRET;

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

module.exports = {
  createBlogPost,
};
