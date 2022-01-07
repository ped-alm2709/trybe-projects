import React from 'react';
import PropTypes from 'prop-types';

function ProductCheckout({ product, index }) {
  const { total, price } = product[1];
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
};
