import React, { createContext, useState, useContext } from "react";
import RoutesPage from "./RoutesPage";
import { useEffect } from "react";
import { AuthContext } from "../data/Authentification";
import RoutesLogin from "./RoutesLogin";

const RouteApp = () => {
  const { setResponseAuth, token, setToken } = useContext(AuthContext);

  const getToken = async () => {
    try {
      const userData = localStorage.getItem("userData");
      const Token = localStorage.getItem("userToken");
      const dataUser = JSON.parse(userData);
      if (dataUser !== null) {
        setResponseAuth(dataUser);
      }
      if (token !== null) {
        setToken(Token);
        return Token;
      }
    } catch (error) {
      setResponseAuth(null);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return token ? (
    <RoutesPage  />
  ) : (
    <RoutesLogin />
  );
};

export default RouteApp;
