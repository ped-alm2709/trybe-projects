import React from 'react';
import PropTypes from 'prop-types';

function OrderDetailHeader(props) {
  const { orderDetail } = props;
  const { id, seller, date, status } = orderDetail;

  const dateConvert = (completeDate) => {
    const dateModif = completeDate.split('T')[0];
    const [year, month, day] = dateModif.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <header>
      <h4
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { `000${id}` }
      </h4>
      <h4
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { `P.Vend: ${seller.name}` }
      </h4>
      <h4
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { dateConvert(date) }
      </h4>
      <h4
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </h4>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        disabled
      >
        Marcar como entregue
      </button>
    </header>
  );
}

OrderDetailHeader.propTypes = {
  orderDetail: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default OrderDetailHeader;
