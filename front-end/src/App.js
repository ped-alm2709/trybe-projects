import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={ Register } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
