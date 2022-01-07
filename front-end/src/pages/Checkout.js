import React from 'react';
import Navbar from '../components/Navbar';
import ProductCheckout from '../components/ProductCheckout';

function Checkout() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const products = cart && Object.entries(cart);
  console.log(products);
  return (
    <div>
      <Navbar />
      <div>
        <p>Finazilar Pedido</p>
        <div>
          { products && products.map((product, index) => (
            <ProductCheckout index={ index } key={ index } product={ product } />
          )) }
          <p
            data-testid="customer_checkout__element-order-total-price"
          >
            { String(products
              .reduce((acc, curr) => acc + curr[1].price * curr[1].total, 0)
              .toFixed(2)).replace(/\./, ',') }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
