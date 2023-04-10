import axios from "axios";

export const api = () =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
