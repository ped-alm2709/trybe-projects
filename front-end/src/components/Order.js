import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Order(props) {
  const { order } = props;
  const { id: orderId, date, total, status } = order;

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
      <Link to={ `/customer/orders/${orderId}` }>
        <div>
          <p data-testid={ `customer_orders__element-order-id-${orderId}` }>

            { `Pedido ${orderId}` }

          </p>
        </div>
        <div>
          <p data-testid={ `customer_orders__element-delivery-status-${orderId}` }>

            { status }

          </p>
        </div>
        <div>
          <p data-testid={ `customer_orders__element-order-date-${orderId}` }>

            {dateConvert(date)}

          </p>
        </div>
        <div>
          <p data-testid={ `customer_orders__element-card-price-${orderId}` }>

            {priceConvert(total)}

          </p>
        </div>
      </Link>
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    total: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default Order;
