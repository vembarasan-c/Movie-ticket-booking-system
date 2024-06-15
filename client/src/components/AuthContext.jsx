import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const token1 = JSON.parse(token);
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token1.token}`;
    }
  }, []);

  const login = async (username, password) => {
    const response = await axios.post("http://localhost:8080/api/auth/login", {
      username,
      password,
    });
    const token = response.data;
    localStorage.setItem("token",JSON.stringify(token));
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setUser({ username });

  };

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  const register = async (username, email, password, phoneNumber, role) => {
    const data = await axios.post("http://localhost:8080/api/auth/register", {
      username,
      email,
      password,
      phoneNumber,
      role
    });

    return data;
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);