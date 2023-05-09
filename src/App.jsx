import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import './App.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import ForgetPassword from './pages/ForgetPassword';

const  App = () => {
  let auth = true
  if (auth) {
    return (
      <div className="app">    
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
        </Routes>
      </div>
    )
  } else {
    return (
      <div className="app">
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/forgetpassword" element={<ForgetPassword/>} />
        </Routes>
      </div>
    )
  }
}

export default App
