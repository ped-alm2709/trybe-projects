module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    displayName: { type: DataTypes.STRING, allowNull: false },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'Users',
    timestamps: false,
  });
  console.log('rodou modelo ==> ', sequelize.models);
  return User;
};
