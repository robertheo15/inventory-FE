import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import ResetPassword from './pages/ResetPassword';
import ExpensePage from './pages/ExpensePage';

import '../src/styles/volt.css'
import SalesPage from './pages/SalesPage';
import ProfilePage from './pages/ProfilePage';
import RoleManagementPage from './pages/RoleManagementPage';
import OrderSupplierPage from './pages/OrderSupplierPage';
import CashierPage from './pages/CashierPage';
import StockPage from './pages/StockPage';
import CourierPage from './pages/CourierPage';
import AddCartPage from './pages/AddCartPage';
import ProductsPage from './pages/ProductsPage';

const  App = () => {  
  
  let auth = true;
  if (auth) {
    return (
      <div className="app">    
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/register" element={<RegisterPage/>} /> 
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/forget-password" element={<ForgetPasswordPage/>} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/expenses" element={<ExpensePage/>} />
          <Route path="/sales" element={<SalesPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/management" element={<RoleManagementPage/>} />
          <Route path="/orders" element={<OrderSupplierPage/>} />
          <Route path="/cashier" element={<CashierPage/>} />
          <Route path="/stocks" element={<StockPage/>} />
          <Route path="/couriers" element={<CourierPage/>} />
          <Route path="/carts" element={<AddCartPage/>} />
          <Route path="/products" element={<ProductsPage/>} />
        </Routes>
      </div>
    )
  } else {
    return (
      <div className="app">
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/forgetpassword" element={<ForgetPasswordPage/>} />
        </Routes>
      </div>
    )
  }
}

export default App
