import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const profileSchema = yup.object().shape({
  fullName: yup.string().required("Name is required"),
  email: yup.string(),
  phone: yup.number().required("Phone is required"),
  postalCode: yup.number().required("Phone is required"),
  address1: yup.string().required("Address is required"),
  address2: yup.string(),
});
