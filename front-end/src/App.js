import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Register from './pages/Register';
import ClientProducts from './pages/ClientProducts';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ ClientProducts } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
