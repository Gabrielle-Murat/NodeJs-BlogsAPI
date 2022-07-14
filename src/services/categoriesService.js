const { Category } = require('../database/models');

// requisito 8

const createCategory = async (name) => {
  const checkExistance = await Category.findOne({ where: { name } });

  if (checkExistance) return 'category existent';

  const newCategory = await Category.create({ name });

  return newCategory;
};

module.exports = {
  createCategory,
};
