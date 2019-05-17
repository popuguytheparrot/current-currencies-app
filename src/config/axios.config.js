import axios from "axios";

export const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" && "https://api.exchangeratesapi.io"
});

