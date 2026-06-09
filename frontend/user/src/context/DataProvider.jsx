import React, { createContext } from "react";
import { useState, useContext } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);

  const login = (userData, authtoken) => {
    localStorage.setItem("token", authtoken);
    localStorage.setItem("user", JSON.stringify(userData));
    setUserData(userData);
    setRole(userData.role);
    setToken(authtoken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserData(null);
    setRole(null);
    setToken(null);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const savedRole = storedUser ? JSON.parse(storedUser).role : null;
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUserData(JSON.parse(storedUser));
      setRole(savedRole);
    } else {
      setToken(null);
      setUserData(null);
      setRole(null);
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
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  return context;
};
