import React, { useState } from 'react';

import PropTypes from 'prop-types';

import ContextRegister from './ContextRegister';

function Provider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer');
  const [users, setUsers] = React.useState('');
  const [sales, setSales] = useState([]);
  const [userObj, setUserObj] = useState({});
  const [totalProducts, setTotalProducts] = useState({});
  const [orderDetail, setOrderDetail] = useState({});

  const state = {
    name,
    email,
    password,
    userType,
    users,
    setUsers,
    setName,
    setEmail,
    setPassword,
    setUserType,
    sales,
    setSales,
    userObj,
    setUserObj,
    totalProducts,
    setTotalProducts,
    orderDetail,
    setOrderDetail,
  };

  return (
    <ContextRegister.Provider value={ state }>
      {children}
    </ContextRegister.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
