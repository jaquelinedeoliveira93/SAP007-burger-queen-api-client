import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import Hall from './pages/Hall';
import Kitchen from './pages/Kitchen';
import ReadyOrders from './pages/ReadyOrders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="hall" element={<Hall />} />
      <Route path="kitchen" element={<Kitchen />} />
      <Route path="readyOrders" element={<ReadyOrders />} />
    </Routes>
  </BrowserRouter>
);
