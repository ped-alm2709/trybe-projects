module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define(
    "sales",
    {
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      sellerId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      totalPrice: DataTypes.DECIMAL,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      status: DataTypes.STRING,
    },
    { timestamps: false, underscored: true }
  );

  sales.associate = (models) => {
    sales.belongsTo(models.user, {
      foreignKey: 'user_id',
      as: 'user',
    });

    sales.belongsTo(models.user, {
      foreignKey: 'seller_id',
      as: 'seller',
    });

    sales.belongsToMany(models.products, {
      through: models.salesProducts, foreignKey: 'sale_id', as: 'products',
    });
  };

  return sales;
};
