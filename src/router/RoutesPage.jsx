import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OrderSupplierPage from "../pages/transaction/OrderSupplierPage";
import SalesPage from "../pages/transaction/SalesPage";
import BarangMasukPage from "../pages/transaction/BarangMasukPage";
import ProfilePage from "../pages/setting/ProfilePage";
import RoleManagementPage from "../pages/setting/RoleManagementPage";
import AddCartPageSupplier from "../pages/orders/AddCartPageSupplier";
import CourierPage from "../pages/courier/CourierPage";
import AddCartPage from "../pages/cashier/AddCartPage";
import ProductsPage from "../pages/product/ProductsPage";
import ProductVariantPage from "../pages/product/ProductVariantPage";
import OrderSupplierReportPage from "../pages/report/OrderSupplierReportPage";
import SalesPageReport from "../pages/report/SalesPageReport";
import TravelDocument from "../pages/report/SuratJalan";
import InvoicePage from "../pages/InvoicePage";
import CustomerPage from "../pages/customer/CustomerPage";
import PricePage from "../pages/setting/PricePage";
import { AuthContext } from "../data/Authentification";

const RoutesPage = () => {
  const { responseAuth } = useContext(AuthContext);
  const { data } = JSON.parse(localStorage.getItem("userData"));
  return (
    <Routes>
      {data.role === 1 ? (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/expenses" element={<OrderSupplierPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/orders/arrives" element={<BarangMasukPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/management" element={<RoleManagementPage />} />
          <Route path="/orders" element={<AddCartPageSupplier />} />
          {/* <Route path="/stocks" element={<StockPage />} /> */}
          <Route path="/couriers" element={<CourierPage />} />
          <Route path="/cashier" element={<AddCartPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/variants" element={<ProductVariantPage />} />
          <Route path="/sales/reports" element={<SalesPageReport />} />
          <Route path="/orders/reports" element={<OrderSupplierReportPage />} />
          <Route path="/invoices" element={<InvoicePage />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/report/surat-jalan" element={<TravelDocument />} />
          <Route path="/prices" element={<PricePage />} />
          <Route path="/*" element={<HomePage />} />
        </>
      ) : data.role === 2 ? (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/expenses" element={<OrderSupplierPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/orders/arrives" element={<BarangMasukPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/orders" element={<AddCartPageSupplier />} />
          {/* <Route path="/stocks" element={<StockPage />} /> */}
          <Route path="/couriers" element={<CourierPage />} />
          <Route path="/cashier" element={<AddCartPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/variants" element={<ProductVariantPage />} />
          <Route path="/sales/reports" element={<SalesPageReport />} />
          <Route path="/orders/reports" element={<OrderSupplierReportPage />} />
          <Route path="/invoices" element={<InvoicePage />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/report/surat-jalan" element={<TravelDocument />} />
          <Route path="/prices" element={<PricePage />} />
          <Route path="/*" element={<HomePage />} />
        </>
      ) : data.role === 3 ? (
        <>
          <Route path="/couriers" element={<CourierPage />} />
          <Route path="/*" element={<HomePage />} />
        </>
      ) : null}
    </Routes>
  );
};

export default RoutesPage;
