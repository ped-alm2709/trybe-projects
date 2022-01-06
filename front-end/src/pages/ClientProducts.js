import React, { useContext } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import ContextRegister from '../context/ContextRegister';

function ClientProducts() {
  const [products, setProducts] = React.useState(null);
  const API_URL = 'http://localhost:3001/';

  const { totalProducts } = useContext(ContextRegister);

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
      <p data-testid="customer_products__checkout-bottom-value">
        { formatedPayment }
      </p>
    </div>
  );
}

export default ClientProducts;
