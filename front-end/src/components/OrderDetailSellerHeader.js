import React from 'react';
import PropTypes from 'prop-types';

function OrderDetailSellerHeader(props) {
  const { orderDetail } = props;
  const { sale } = orderDetail;
  const { id, saleDate: date, status } = sale;

  const dateConvert = (completeDate) => {
    const dateModif = completeDate.split('T')[0];
    const [year, month, day] = dateModif.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <header>
      <h4
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        { `000${id}` }
      </h4>
      <h4
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { date && dateConvert(date) }
      </h4>
      <h4
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </h4>
      <button
        data-testid="seller_order_details__button-preparing-check"
        type="button"
        disabled
      >
        Preparar Pedido
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        disabled
      >
        Saiu para entrega
      </button>
    </header>
  );
}

OrderDetailSellerHeader.propTypes = {
  orderDetail: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default OrderDetailSellerHeader;
