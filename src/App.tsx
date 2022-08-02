import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routing from 'services/routing';

import 'styles/common.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export default App;
