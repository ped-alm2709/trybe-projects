module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define(
    "salesProducts",
    {
      quantity: DataTypes.INTEGER,
    },
    { timestamps: false }
  );

  return salesProducts;
};
