import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCardSeller(props) {
  const { order } = props;
  const {
    id,
    saleDate,
    totalPrice,
    status,
    deliveryAddress,
    deliveryNumber,
  } = order;

  const dateConvert = (completeDate) => {
    const dateModif = completeDate.split('T')[0];
    const [year, month, day] = dateModif.split('-');
    return `${day}/${month}/${year}`;
  };

  const convertPrice = (price) => {
    const convert = price.replace(/\./, ',');
    return convert;
  };

  return (
    <div>
      <Link to={ `/seller/orders/${id}` }>
        <div>
          <h3
            data-testid={ `seller_orders__element-order-id-${id}` }
          >
            {`Pedido ${id}`}
          </h3>
        </div>
        <div>
          <h3
            data-testid={ `seller_orders__element-delivery-status-${id}` }
          >
            {status}
          </h3>
        </div>
        <div>
          <p
            data-testid={ `seller_orders__element-order-date-${id}` }
          >
            {dateConvert(saleDate)}
          </p>
          <p
            data-testid={ `seller_orders__element-card-price-${id}` }
          >
            {convertPrice(totalPrice)}
          </p>
          <p data-testid={ `seller_orders__element-card-address-${id}` }>
            {`${deliveryAddress} ${deliveryNumber}`}
          </p>
        </div>
      </Link>
    </div>
  );
}

OrderCardSeller.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
    status: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
  }).isRequired,
};

export default OrderCardSeller;
