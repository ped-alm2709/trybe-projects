import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ContextRegister from '../context/ContextRegister';
import OrderDetailHeader from './OrderDetailHeader';

function OrderDetailMain(props) {
  const [loading, setLoading] = useState(true);

  const {
    orderDetail,
    setOrderDetail,
  } = useContext(ContextRegister);

  const { removeButton } = props;

  const { products } = orderDetail;
  const arrValue = [
    'Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total'];
  if (removeButton) arrValue.push('Remover Item');

  const priceTotal = (price, quant) => (
    (price * quant).toFixed(2).toString().replace(/\./, ','));

  const API_URL = 'http://localhost:3001/';

  const getSaleId = (id) => axios.get(`${API_URL}sales/${id}`);

  const getSale = async (orderId) => {
    const response = await getSaleId(orderId);
    setOrderDetail(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getSale(id);
  }, [loading]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <main>
      <OrderDetailHeader orderDetail={ orderDetail } />
      <table>
        <thead>
          <tr>
            {arrValue.map((arr, index) => <th key={ index }>{arr}</th>)}
          </tr>
        </thead>
        <tbody>
          { products.length > 1
            ? products.map((product, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-item-number-${index}`
                  }
                >
                  {product.id }
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-name-${index}`
                  }
                >
                  {product.name }
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-quantity-${index}`
                  }
                >
                  {product.quantity }
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  { product.price.replace(/\./, ',') }
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-total-price-${index}`
                  }
                >
                  {priceTotal(product.price, product.quantity) }
                </td>
              </tr>
            ))
            : null }
        </tbody>
      </table>
      <p
        data-testid="customer_order_details__element-order-total-price"
      >
        { orderDetail.total.replace(/\./, ',') }
      </p>
    </main>
  );
}

OrderDetailMain.propTypes = {
  removeButton: PropTypes.bool.isRequired,
};

export default OrderDetailMain;
