import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ContextRegister from '../context/ContextRegister';
import Navbar from '../components/Navbar';
import Order from '../components/Order';

function CustomerOrders() {
  const [isLoading, setIsLoading] = useState(true);
  const { sales, setSales, userObj, setUserObj } = useContext(ContextRegister);
  console.log(sales);
  console.log(userObj);
  console.log(setSales);

  const API_URL = 'http://localhost:3001/';

  const getSales = async () => {
    const response = await axios.get(`${API_URL}/sales`);
    return response;
  };

  const renderOrders = () => {
    const render = sales.map((order) => <Order key={ order.id } order={ order } />);
    return render;
  };

  const filterSales = (data) => {
    const filter = data.filter((order) => order.id === userObj.id);
    return filter;
  };

  const fetchSales = async () => {
    const salesFetch = await getSales();
    const salesData = salesFetch.data;
    const salesFiltered = filterSales(salesData);
    setSales(salesFiltered);
    setIsLoading(false);
  };

  useEffect(async () => {
    setUserObj(JSON.parse(localStorage.getItem('user')));
    fetchSales();
  }, [isLoading]);

  return (
    <div>
      <Navbar />
      { renderOrders() }
    </div>
  );
}

export default CustomerOrders;
