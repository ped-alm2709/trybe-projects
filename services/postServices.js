const { Users, BlogPosts, Categories } = require('../models');

const validateCategories = async (categoryIds) => {
  const categories = await Categories.findAll();
  const idsValues = categories.map((obj) => obj.id);
  const isValidCategorie = categoryIds.every((id) => idsValues.includes(id));
  return isValidCategorie;
};

const createPostServices = async (body) => {
  const { title, content, categoryIds } = body;
  const validCategories = await validateCategories(categoryIds);
  if (!validCategories) return null;
  const post = await BlogPosts.create({
    userId: 1, 
    title,
    content,  
  });
  return post;
};

const getAllPostsServices = async () => BlogPosts.findAll({
  include: [
    { model: Users, as: 'user', attributes: { exclude: ['password'] } },
    { model: Categories, as: 'categories', through: { attributes: [] } },
  ],
});

const getByIdServices = async (id) => BlogPosts.findByPk(id, {
  include: [
    { model: Users, as: 'user', attributes: { exclude: ['password'] } },
    { model: Categories, as: 'categories', through: { attributes: [] } },
  ],
});

module.exports = {
  createPostServices,
  getAllPostsServices,
  getByIdServices,
};
