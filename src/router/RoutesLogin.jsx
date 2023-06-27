import React from "react";
import { Routes, Route } from "react-router-dom";

import ForgetPasswordPage from "../pages/auth/ForgetPasswordPage";
import LoginPage from "../pages/auth/LoginPage";
import ResetPassword from "../pages/auth/ResetPassword";

const RoutesLogin = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/forget-password" element={<ForgetPasswordPage />} />
      <Route path="/*" element={<LoginPage />} />
    </Routes>
  );
};

export default RoutesLogin;
