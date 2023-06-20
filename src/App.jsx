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
import ProfilePage from "./pages/ProfilePage";
import RoleManagementPage from "./pages/RoleManagementPage";
import StockPage from "./pages/StockPage";
import AddCartPage from "./pages/cashier/AddCartPage";
import ProductsPage from "./pages/product/ProductsPage";
import InvoicePage from "./pages/InvoicePage";
import OrderSupplierReportPage from "./pages/report/OrderSupplierReportPage";
import SalesReportPage from "./pages/report/SalesPageReport";
import CustomerPage from "./pages/customer/CustomerPage";
import ProductVariantPage from "./pages/product/ProductVariantPage";
import TravelDocument from "./pages/report/SuratJalan";
import CourierPage from "./pages/courier/CourierPage";
import AddCartPageSupplier from "./pages/orders/AddCartPageSupplier";
import PricePage from "./pages/setting/PricePage";
import BarangMasukPage from "./pages/transaction/BarangMasukPage";
import OrderSupplierPage from "./pages/transaction/OrderSupplierPage";

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
          <Route path="/orders/arrives" element={<BarangMasukPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/management" element={<RoleManagementPage />} />
          <Route path="/orders" element={<AddCartPageSupplier />} />
          <Route path="/stocks" element={<StockPage />} />
          <Route path="/couriers" element={<CourierPage />} />
          <Route path="/cashier" element={<AddCartPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/variants" element={<ProductVariantPage />} />
          <Route path="/sales/reports" element={<SalesReportPage />} />
          <Route path="/orders/reports" element={<OrderSupplierReportPage />} />
          <Route path="/invoices" element={<InvoicePage />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/report/surat-jalan" element={<TravelDocument />} />
          <Route path="/prices" element={<PricePage />} />
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
