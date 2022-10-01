import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Login } from '../components/Login';
import { Products } from '../components/Products';
import { AddProduct } from '../components/AddProduct';

export const Rotas = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={ <Login /> } />
      <Route path="/products" element={ <Products /> } />
      <Route path="/addProduct" element={ <AddProduct /> } />
    </Routes>

    </BrowserRouter>
  )
}