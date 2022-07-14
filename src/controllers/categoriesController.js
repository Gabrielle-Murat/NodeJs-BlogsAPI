const Category = require('../services/categoriesService');

// requisito 8

const createCategory = async (req, res) => {
  const { name } = req.body;

  const response = await Category.createCategory(name);

  if (response === 'category existent') {
    return res.status(409).json({ message: 'Category already exists' });
  }

  return res.status(201).json(response);
};

// requisito 9

const getCategories = async (_req, res) => {
  const categories = await Category.getCategories();

  if (!categories) return res.status(500).json({ message: 'Something went wrong' });

  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getCategories,
};
