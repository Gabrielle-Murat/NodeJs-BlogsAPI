// requisito 12

const { BlogPost, Category, PostCategory, User } = require('../database/models');

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

// requisito 13

const getBlogPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return posts;
};

// requisito 14

const getBlogPostById = async (id) => {
  const postById = await BlogPost.findOne({
    where: { id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  if (!postById) return null;
  return postById;
};

// requisito 15

const updateBlogPost = async (id, title, content, userId) => {
  const postById = await BlogPost.findByPk(id);

  if (!postById) return 'post invalid';
  if (postById.userId !== userId) return 'user invalid';

  const [updatePost] = await BlogPost.update(
    { title, content }, { where: { id } },
  );

  const updatedPost = await BlogPost.findOne({
    where: updatePost,
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return updatedPost;
};

// requisito 16

const deleteBlogPost = async (id, userId) => {
  const postById = await BlogPost.findByPk(id);

  if (!postById) return 'post invalid';
  if (postById.userId !== userId) return 'user invalid';

  await BlogPost.destroy({ where: { id } });
};

module.exports = {
  createBlogPost,
  getBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
};
