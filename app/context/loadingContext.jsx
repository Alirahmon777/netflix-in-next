"use client"
import React, { createContext, useEffect, useState } from "react";
import { API_KEY, api } from "../utils/api";

export const PopularContext = createContext();

const PopularContextProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    api()
      .get(`movie/popular?api_key=${API_KEY}`)
      .then(({ data }) => setPopular(data));
  }, []);

  return (
    <PopularContext.Provider
      value={{
        popular,
        setPopular,
      }}
    >
      {children}
    </PopularContext.Provider>
  );
};

export default PopularContextProvider;
