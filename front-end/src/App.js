import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import ClientProducts from './pages/ClientProducts';
import Checkout from './pages/Checkout';
import CustomerOrders from './pages/CustomerOrders';
import OrdersDetails from './pages/OrderDetails';
import sellerOrders from './pages/SellerOrders';
import SellerDetails from './pages/SellerDetails';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={ Register } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/customer/products" component={ ClientProducts } />
        <Route exact path="/customer/orders/:id" component={ OrdersDetails } />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route exact path="/customer/orders" component={ CustomerOrders } />
        <Route exact path="/seller/orders" component={ sellerOrders } />
        <Route exact path="/seller/orders/:id" component={ SellerDetails } />
        <Route path="/admin/manage" component={ Admin } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
