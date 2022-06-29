import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Home from 'screens/Home';
import Login from 'screens/Login';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Switch>
  );
};

export default Routes;
