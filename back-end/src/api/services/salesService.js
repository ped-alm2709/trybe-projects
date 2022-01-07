const Sales = require('../../database/models').sales;
const User = require('../../database/models').user;

const createSale = async ({ seller, price, address, number, name, status }) => {
  const { id: userId } = await User.findOne({ where: { name } });
  const { id: sellerId } = await User.findOne({ where: { name: seller } });

  const allProducts = Sales.create({ 
      userId,
      sellerId,
      totalPrice: price,
      deliveryAddress: address,
      deliveryNumber: number,
      status: status || 'Pendente',
    });

  return allProducts;
};

module.exports = {
  createSale,
};