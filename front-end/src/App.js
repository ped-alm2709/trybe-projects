import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
