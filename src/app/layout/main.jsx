import React from 'react';
import {  Routes, Route } from "react-router-dom";
import User from '../home/user';
import Cart from '../home/cart';
import Register from '../home/register';
import Login from '../home/login';
import Category from '../home/category';
import DetailsProduct from '../home/detailsProduct';
import Home from './home';

const Main = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<DetailsProduct />} />
          <Route path="/category" element={<Category />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />} />
  
        </Routes>
    );
}

export default Main;
