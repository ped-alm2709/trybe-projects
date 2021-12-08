module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostsCategories',
    {}, { tableName: 'PostsCategories', timestamps: false });
  PostCategory.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: 'PostsCategories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'posts',
      through: 'PostsCategories',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategory;
};
