import React from 'react';
import PropTypes from 'prop-types';

function ProductCheckout({ product, index, setProducts, products }) {
  const { total, price } = product[1];

  const removeItem = () => {
    setProducts(products.filter((productFromArr) => product[0] !== productFromArr[0]));
    const storage = JSON.parse(localStorage.getItem('cart'));
    delete storage[product[0]];
    localStorage.setItem('cart', JSON.stringify(storage));
  };

  return (
    <div>
      <span
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { ` ${index + 1} ` }
      </span>
      <span
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        { product[0] }
      </span>
      <span
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        { ` ${total} ` }
      </span>
      <span
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        { ` ${price.replace(/\./, ',')} ` }
      </span>
      <span
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        { String((total * price).toFixed(2)).replace(/\./, ',') }
      </span>
      <button
        type="button"
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        onClick={ () => removeItem() }
      >
        Remover
      </button>
    </div>
  );
}

export default ProductCheckout;

ProductCheckout.propTypes = {
  product: PropTypes
    .arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
  index: PropTypes.number.isRequired,
  setProducts: PropTypes.func.isRequired,
  products: PropTypes
    .arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
};
