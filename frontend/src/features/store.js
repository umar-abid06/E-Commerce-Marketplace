import { configureStore } from "@reduxjs/toolkit";
import userLoginSlice from "./user/userLogin-slice";
// import userDetailsSlice from "./user/userDetailsSlice";
import userRegistrationSlice from "./user/userRegister-slice";
// import productsSlice from "./product/products-slice";

const store = configureStore({
  reducer: {
    userLogin: userLoginSlice,
    userRegistration: userRegistrationSlice,
    // product: productsSlice,
    // userDetails: userDetailsSlice,
  },
});

export default store;
