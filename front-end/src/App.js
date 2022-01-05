import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

=======
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
>>>>>>> 905b0080f38a4805db0258c351f6e90810a4a6a8
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
=======
        <Route exact path="/register" component={ Register } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
>>>>>>> 905b0080f38a4805db0258c351f6e90810a4a6a8
      </Switch>
    </BrowserRouter>
  );
}

export default App;
