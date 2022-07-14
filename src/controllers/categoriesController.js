const Category = require('../services/categoriesService');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const response = await Category.createCategory(name);

  if (response === 'category existent') {
    return res.status(409).json({ message: 'Category already exists' });
  }

  return res.status(201).json(response);
};

module.exports = {
  createCategory,
};
