// requisito 12

const { BlogPost, Category, PostCategory } = require('../database/models');

const createBlogPost = async (title, content, categoryIds, userId) => {
  const categories = await Category.findAll();
  const categoriesIds = categories.map(({ id }) => id);
  const checkCategoriesIdExistance = await categoryIds.some((id) => categoriesIds.includes(id));

  if (checkCategoriesIdExistance === false) return 'category invalid';

  const newPost = await BlogPost.create({ title, content, userId });

  await Promise.all(categoryIds
    .map((categoryId) => PostCategory.create({ postId: newPost.id, categoryId })));

  return newPost;
};

module.exports = {
  createBlogPost,
};
