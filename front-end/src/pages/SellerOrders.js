import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ContextRegister from '../context/ContextRegister';
import Navbar from '../components/Navbar';
import OrderCardSeller from '../components/OrderCardSeller';

function CustomerOrders() {
  const [isLoading, setIsLoading] = useState(true);
  const { sales, setSales, userObj, setUserObj } = useContext(ContextRegister);

  const API_URL = 'http://localhost:3001/';

  const getSales = async () => {
    const { token, email } = JSON.parse(localStorage.getItem('user'));
    const { data } = await axios.get(`${API_URL}sales/seller/${email}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  };

  const renderOrders = () => {
    const render = sales
      .map((order) => <OrderCardSeller key={ order.id } order={ order } />);
    return render;
  };

  const fetchSales = async () => {
    const salesFetch = await getSales();
    setSales(salesFetch);
    setIsLoading(false);
  };

  useEffect(async () => {
    setUserObj(JSON.parse(localStorage.getItem('user')));
    fetchSales();
  }, [isLoading]);

  // pegar a props name e colocar no Navbar para mostrar o nome do cliente logado.

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <Navbar name={ userObj.name } />
      { renderOrders() }
    </div>
  );
}

export default CustomerOrders;
