const { Category } = require('../database/models');

// requisito 8

const createCategory = async (name) => {
  const checkExistance = await Category.findOne({ where: { name } });

  if (checkExistance) return 'category existent';

  const newCategory = await Category.create({ name });

  return newCategory;
};

// requisito 9

const getCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  createCategory,
  getCategories,
};
