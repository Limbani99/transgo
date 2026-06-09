import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoginedIn, setIsLoggedIn] = useState(false);
  const login = (userData, authtoken) => {
    localStorage.setItem("token", authtoken);
    localStorage.setItem("user", JSON.stringify(userData));
    setUserData(userData);
    setRole(userData.role);
    setToken(authtoken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserData(null);
    setRole(null);
    setToken(null);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const savedRole = storedUser ? JSON.parse(storedUser).role : null;
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUserData(JSON.parse(storedUser));
      setRole(savedRole);
      setIsLoggedIn(true);
    } else {
      setToken(null);
      setUserData(null);
      setRole(null);
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const interceptor = axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) config.headers["Authorization"] = `Bearer ${token}`;
        return config;
      },
      (error) => Promise.reject(error),
    );
    return () => axios.interceptors.request.eject(interceptor);
  }, []);

  const value = {
    userData,
    role,
    token,
    login,
    logout,
    isLoginedIn,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
