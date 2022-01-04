module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    seller_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    total_price: DataTypes.DECIMAL(10, 2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: DataTypes.STRING,
  });

  return Sale;
};
