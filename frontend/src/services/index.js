import axios from "axios";
import { BASE_URL, userLogin, userRegistration, path } from "./constants";
import { productData } from "../data";

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const login = async (payload) => {
  try {
    const { data } = await API.post(`${path}/${userLogin}`, payload);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
const signup = async (payload) => {
  try {
    const { data } = await API.post(`${path}/${userRegistration}`, payload);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

const getProducts = async () => {
  // try {
  //   const { data } = await API.post(`${path}/${userLogin}`, payload);
  //   return data;
  // } catch (error) {
  //   return error.response.data;
  // }
  const allProducts = {
    status: "SUCCESS",
    data: productData,
    message: "Products Data!",
  };
  console.log(allProducts);
  return { status: "SUCCESS", data: productData, message: "Products Data!" };
};

export { login, signup, getProducts };
