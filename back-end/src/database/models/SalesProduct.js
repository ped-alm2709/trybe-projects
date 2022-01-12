module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define(
    "salesProducts",
    {
      saleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      quantity: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    { timestamps: false, underscored: true, tableName: 'sales_products' }
  );

  return salesProducts;
};
