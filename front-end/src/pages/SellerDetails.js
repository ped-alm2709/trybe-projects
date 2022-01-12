import React from 'react';
import PropTypes from 'prop-types';
import OrderDetailSellerMain from '../components/OrderDetailSellerMain';
import Navbar from '../components/Navbar';

function SellerDetails(props) {
  const { name, role } = JSON.parse(localStorage.getItem('user'));
  const { match: { params: { id } } } = props;
  return (
    <div>
      <Navbar name={ name } role={ role } />
      <OrderDetailSellerMain id={ id } />
    </div>
  );
}

SellerDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SellerDetails;
