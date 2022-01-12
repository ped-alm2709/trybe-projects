import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ContextRegister from '../context/ContextRegister';

function OrderDetailSellerHeader(props) {
  const { orderDetail } = props;
  const { sale } = orderDetail;
  const { id, saleDate: date, status } = sale;
  const [statusMsg, setStatusMsg] = React.useState(status);

  const {
    setOrderDetail,
  } = useContext(ContextRegister);

  const API_URL = 'http://localhost:3001/sales/';

  const dateConvert = (completeDate) => {
    const dateModif = completeDate.split('T')[0];
    const [year, month, day] = dateModif.split('-');
    return `${day}/${month}/${year}`;
  };

  const changeStatus = (statusMessage) => {
    axios.post(`${API_URL}${id}`, { status: statusMessage, id })
      .then(({ data }) => {
        setOrderDetail(
          { ...orderDetail, sale: { ...orderDetail.sale, status: data.status } },
        );
        setStatusMsg(statusMessage);
      });
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
        { statusMsg }
      </h4>
      <button
        data-testid="seller_order_details__button-preparing-check"
        type="button"
        name="Preparando"
        disabled={ statusMsg !== 'Pendente' }
        onClick={ () => changeStatus('Preparando') }
      >
        Preparar Pedido
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        name="Em Trânsito"
        disabled={ statusMsg !== 'Preparando' }
        onClick={ () => changeStatus('Em Trânsito') }
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
