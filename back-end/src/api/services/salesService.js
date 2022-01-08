const Sales = require('../../database/models').sales;
const User = require('../../database/models').user;
const Products = require('../../database/models').products;
const SalesProducts = require('../../database/models').salesProducts;

const getSalesByUser = async (user) => {
  const { id } = await User.findOne({ where: { email: user } });
  const sales = Sales.findAll({ where: { userId: id } });
  return sales;
};

const getSaleById = async (id) => {
  const sale = await Sales.findOne({ where: { id } });
  const seller = await User.findOne({ where: { id: sale.sellerId } });
  const salesProduct = await SalesProducts.findAll({ where: { saleId: id } });

  const drinks = {};
  const product = await Products.findAll();
  product.forEach(({
    name: productName,
    id: productId, price,
  }) => { drinks[productId] = { productName, price }; });

  const sales = salesProduct.map(({ productId, quantity }) => ({
    name: drinks[productId].productName,
    quantity,
    price: drinks[productId].price,
  }));

  return { sales, seller, sale };
};

const saveProductsSale = (sales, saleId, drinks) => Object.entries(sales).forEach((item) => {
  const productId = drinks[item[0]];
  const quantity = item[1].total;
  SalesProducts.create({ saleId, quantity, productId });
}); 

const createSale = async ({ seller, price, address, number, name, status, cart }) => {
  const { id: userId } = await User.findOne({ where: { name } });
  const { id: sellerId } = await User.findOne({ where: { name: seller } });

  console.log(seller);

  const drinks = {};
  const product = await Products.findAll();
  product.forEach(({ name: productName, id }) => { drinks[productName] = id; });

  const newSale = await Sales.create({ 
      userId,
      sellerId,
      totalPrice: price,
      deliveryAddress: address,
      deliveryNumber: number,
      status: status || 'Pendente',
    });
    
  saveProductsSale(cart, newSale.id, drinks);

  return newSale;
};

module.exports = {
  createSale,
  getSalesByUser,
  getSaleById,
};
//