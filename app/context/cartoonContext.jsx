"use client";
import React, { createContext, useEffect, useState } from "react";
import { API_KEY, api } from "../utils/api";

export const CartoonContext = createContext();

const CartoonContextProvider = ({ children }) => {
  const [cartoon, setCartoon] = useState([]);

  useEffect(() => {
    api()
      .get(
        `discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=16`
      )
      .then(({ data }) => setCartoon(data.results));
  }, []);

  return (
    <CartoonContext.Provider
      value={{
        cartoon,
        setCartoon,
      }}
    >
      {children}
    </CartoonContext.Provider>
  );
};

export default CartoonContextProvider;
