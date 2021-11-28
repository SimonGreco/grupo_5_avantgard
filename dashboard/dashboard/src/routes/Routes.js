
import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from '../views/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/control-panel" component={Dashboard} />


      </Switch>
    </BrowserRouter>
  );
}

export default App;
