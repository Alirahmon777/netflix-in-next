"use client";
import React, { createContext, useEffect, useState } from "react";
import { API_KEY, api } from "../utils/api";

export const SeriesContext = createContext();

const SeriesContextProvider = ({ children }) => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    api()
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}discover/tv?api_key=${API_KEY}`,
        {
          cache: "force-cache",
        }
      )
      .then(({ data }) => setSeries(data));
  }, []);

  return (
    <SeriesContext.Provider
      value={{
        series,
        setSeries,
      }}
    >
      {children}
    </SeriesContext.Provider>
  );
};

export default SeriesContextProvider;
