module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    { timestamps: false }
  );

  user.associate = (models) => {
    user.hasMany(models.sales, {
      foreignKey: 'user_id',
      as: 'userBuys',
    });

    user.hasMany(models.sales, {
      foreignKey: 'seller_id',
      as: 'sellerSales',
    });
  };

  return user;
};
