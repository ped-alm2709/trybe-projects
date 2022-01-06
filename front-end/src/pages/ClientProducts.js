import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Product from '../components/Product';

function ClientProducts() {
  const [products, setProducts] = React.useState(null);
  const API_URL = 'http://localhost:3001/';

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
    </div>
  );
}

export default ClientProducts;
