import axios from "axios";
import { BASE_URL, userLogin, userRegistration, path } from "./constants";

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

export { login, signup };
