"use client"
import React, { createContext, useEffect, useState } from "react";
import { API_KEY, api } from "../utils/api";

export const RecomContext = createContext();

const RecomContextProvider = ({ children }) => {
  const [recom, setRecom] = useState([]);

  useEffect(() => {
    api()
      .get(`movie/525/recommendations?api_key=${API_KEY}`)
      .then(({ data }) => setRecom(data));
  }, []);

  return (
    <RecomContext.Provider
      value={{
        recom,
        setRecom,
      }}
    >
      {children}
    </RecomContext.Provider>
  );
};

export default RecomContextProvider;
