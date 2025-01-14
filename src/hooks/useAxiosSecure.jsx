import axios from "axios";
import { use } from "react";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
    // axiosSecure.interceptors.request.use(
    // (config) => {
    // const token = localStorage.getItem("token");
    // if (token) {
    // config.headers.Authorization = `Bearer ${token}`;
    // }
    // return config;
    // }
    // );

const useAxiosSecure = () => {
        return axiosSecure;

};

export default useAxiosSecure;