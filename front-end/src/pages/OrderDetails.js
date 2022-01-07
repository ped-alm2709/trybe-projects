import React from 'react';
import PropTypes from 'prop-types';
import OrderDetailMain from '../components/OrderDetailMain';
import Navbar from '../components/Navbar';

function OrdersDetails(props) {
  const { name, role } = JSON.parse(localStorage.getItem('user'));
  const { match: { params: { id } } } = props;
  return (
    <div>
      <Navbar name={ name } role={ role } />
      <OrderDetailMain id={ id } />
    </div>
  );
}

OrdersDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default OrdersDetails;
