module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
  }, {
    tableName: 'Categories',
    timestamps: false,
  });
  return Category;
};
