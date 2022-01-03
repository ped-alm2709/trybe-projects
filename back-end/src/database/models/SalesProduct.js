module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define("SalesProducts", {
    quantity: DataTypes.INTEGER,
  });

  return SalesProducts;
};
