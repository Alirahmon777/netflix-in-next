"use client";

import React, { createContext, useState } from "react";
import { getLocalStorage } from "../lib/localStorage";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(
    getLocalStorage("token") ? true : false
  );
  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
