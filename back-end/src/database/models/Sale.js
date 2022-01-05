module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define(
    "sale",
    {
      user_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      seller_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      total_price: DataTypes.DECIMAL,
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      status: DataTypes.STRING,
    },
    { timestamps: false }
  );

  return sale;
};
