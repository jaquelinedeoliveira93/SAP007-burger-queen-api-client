import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Login from '../src/pages/Login/Login';
import Register from '../src/pages/Register/Register';
import Hall from '../src/pages/Hall/Hall';
import Kitchen from '../src/pages/Kitchen/Kitchen';
import ReadyOrders from '../src/pages/ReadyOrders/ReadyOrders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='hall' element={<Hall />} />
        <Route path='kitchen' element={<Kitchen />} />
        <Route path='readyOrders' element={<ReadyOrders />} />
      </Routes>
    </BrowserRouter>
);
