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
    const { token } = JSON.parse(localStorage.getItem('user'));
    const response = await axios.get(`${API_URL}sales`, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  };

  const renderOrders = () => {
    const render = sales.map((order) => <OrderCardSeller key={ order.id } order={ order } />);
    return render;
  };

  const fetchSales = async () => {
    const salesFetch = await getSales();
    const salesData = salesFetch.data.response;
    setSales(salesData);
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
