"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { API_KEY, api } from "../utils/api";
import { LoadingContext } from "./loadingContext";

export const CartoonContext = createContext();

const CartoonContextProvider = ({ children }) => {
  const [cartoon, setCartoon] = useState([]);
  const { setLoading } = useContext(LoadingContext);
  useEffect(() => {
    api()
      .get(
        `discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=16`
      )
      .then(({ data }) => {
        setLoading(true);
        setCartoon(data);
      })
      .finally(() => setLoading(false));
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
