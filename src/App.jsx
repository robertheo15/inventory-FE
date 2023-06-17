import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import ResetPassword from "./pages/ResetPassword";
import ExpensePage from "./pages/ExpensePage";

import "../src/styles/volt.css";
import SalesPage from "./pages/transaction/SalesPage";
import OrderSupplierPage from "./pages/transaction/OrderSupplierPage";
import ProfilePage from "./pages/ProfilePage";
import RoleManagementPage from "./pages/RoleManagementPage";
// import CashierPage from "./pages/cashier/CashierPage";
import StockPage from "./pages/StockPage";
import CourierPage from "./pages/CourierPage";
import AddCartPage from "./pages/cashier/AddCartPage";
import ProductsPage from "./pages/product/ProductsPage";
import InvoicePage from "./pages/InvoicePage";
import AddCartPageSupplier from "./pages/AddCartPageSupplier";
import OrderSupplierReportPage from "./pages/OrderSupplierReportPage";
import SalesReportPage from "./pages/SalesPageReport";
import CustomerPage from "./pages/customer/CustomerPage";
import ProductVariantPage from "./pages/product/ProductVariantPage";

const App = () => {
  let auth = true;
  if (auth) {
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/expenses" element={<OrderSupplierPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/management" element={<RoleManagementPage />} />
          <Route path="/orders" element={<AddCartPageSupplier />} />
          <Route path="/stocks" element={<StockPage />} />
          <Route path="/couriers" element={<CourierPage />} />
          <Route path="/cashier" element={<AddCartPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/variants" element={<ProductVariantPage />} />
          <Route path="/sales/reports" element={<OrderSupplierReportPage />} />
          <Route path="/orders/reports" element={<SalesReportPage />} />
          <Route path="/invoices" element={<InvoicePage />} />
          <Route path="/customers" element={<CustomerPage />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="app">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
        </Routes>
      </div>
    );
  }
};

export default App;
