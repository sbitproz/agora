import Axios from "axios-observable";
import { setupInterceptors } from "./apiInterceptor";

export const API = Axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

API.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

setupInterceptors(API);
