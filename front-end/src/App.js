import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import ClientProducts from './pages/ClientProducts';

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
