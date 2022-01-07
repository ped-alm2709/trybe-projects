import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ProductCheckout from '../components/ProductCheckout';

function Checkout() {
  const [products, setProducts] = React.useState();
  const [sellers, setSellers] = React.useState();

  const API_URL = 'http://localhost:3001/';

  React.useEffect(() => {
    axios.get(`${API_URL}sellers`).then(({ data }) => setSellers(data));
  }, []);

  React.useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const arrayProducts = cart && Object.entries(cart);
    setProducts(arrayProducts);
  }, []);

  const createSale = () => {
    // axios.post(`${API_URL}sale`, {  });
  };

  if (!products || !sellers) return 'loading...';

  return (
    <div>
      <Navbar />
      <div>
        <p>Finazilar Pedido</p>
        <div>
          { products && products.map((product, index) => (
            <ProductCheckout
              index={ index }
              key={ index }
              product={ product }
              setProducts={ setProducts }
              products={ products }
            />
          )) }
          <p
            data-testid="customer_checkout__element-order-total-price"
          >
            { String(products
              .reduce((acc, curr) => acc + curr[1].price * curr[1].total, 0)
              .toFixed(2)).replace(/\./, ',') }
          </p>
        </div>
        <p>Detalhes e Endereço para Entrega</p>
        <label htmlFor="seller">
          P. Vendedora Responsável:
          <select data-testid="customer_checkout__select-seller" id="seller">
            { sellers.map((seller, index) => (
              <option key={ index }>{ seller.name }</option>
            )) }
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            id="address"
            placeholder="Travessa Terceira"
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            data-testid="customer_checkout__input-addressNumber"
            id="number"
            placeholder="198"
          />
        </label>
        <button
          data-testid="customer_checkout__button-submit-order"
          onClick={ () => createSale() }
          type="button"
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}

export default Checkout;
