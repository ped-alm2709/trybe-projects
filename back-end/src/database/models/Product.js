module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define(
    "products",
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(4, 2),
      url_image: DataTypes.STRING,
    },
    { timestamps: false }
  );

  products.associates = (models) => {
    products.belongsToMany(models.sales, {
      through: models.salesProducts, foreignKey: 'product_id', as: 'sales',
    });
  };

  return products;
};
