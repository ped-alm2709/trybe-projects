import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Order(props) {
  const { order } = props;

  const { id, saleDate, totalPrice, status } = order;

  const dateConvert = (completeDate) => {
    const dateModif = completeDate.split('T')[0];
    const [year, month, day] = dateModif.split('-');
    return `${day}/${month}/${year}`;
  };

  const priceConvert = (price) => {
    const priceModif = price.replace(/\./, ',');
    return priceModif;
  };

  return (
    <div>
      <Link to={ `/customer/orders/${id}` }>
        <div>
          <p data-testid={ `customer_orders__element-order-id-${id}` }>

            { `Pedido ${id}` }

          </p>
        </div>
        <div>
          <p data-testid={ `customer_orders__element-delivery-status-${id}` }>

            { status }

          </p>
        </div>
        <div>
          <p data-testid={ `customer_orders__element-order-date-${id}` }>

            {dateConvert(saleDate)}

          </p>
        </div>
        <div>
          <p data-testid={ `customer_orders__element-card-price-${id}` }>

            {priceConvert(totalPrice)}

          </p>
        </div>
      </Link>
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default Order;
