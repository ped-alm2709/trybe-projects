import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import ContextRegister from '../context/ContextRegister';

function ClientProducts() {
  const [products, setProducts] = React.useState(null);
  const API_URL = 'http://localhost:3001/';

  const history = useHistory();

  const { totalProducts } = useContext(ContextRegister);

  localStorage.setItem('cart', JSON.stringify(totalProducts));

  const drinks = Object.values(totalProducts);
  const totalPayment = drinks.reduce(
    (acc, curr) => acc + curr.total * curr.price, 0,
  ).toFixed(2);
  const formatedPayment = String(totalPayment).replace(/\./g, ',');

  React.useEffect(() => {
    axios.get(`${API_URL}products`).then(({ data }) => {
      setProducts(data);
    });
  }, []);

  if (!products) {
    return 'Loading...';
  }

  return (
    <div>
      <Navbar />
      { products.map((product, index) => (<Product
        key={ index + 1 }
        index={ index + 1 }
        { ...product }
      />)) }
      <button
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ formatedPayment === '0,00' }
        onClick={ () => history.push('/customer/checkout') }
      >
        <p data-testid="customer_products__checkout-bottom-value">
          { formatedPayment }
        </p>
      </button>
    </div>
  );
}

export default ClientProducts;
