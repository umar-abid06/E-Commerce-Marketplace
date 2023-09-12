// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getProducts } from "../../services/index";

// const initialState = {
//   status: "",
//   message: "",
//   isError: false,
//   isLoading: false,
//   data: null,
// };

// export const products = createAsyncThunk("products/getAll", getProducts);

// const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     getAllProducts: (state, { payload }) => {
//       state.data = payload.data;
//     },
//   },
//   extraReducers: {
//     [products.pending]: (state) => {
//       (state.status = "PENDING"), (state.isLoading = true);
//     },
//     [products.fulfilled]: (state, { payload }) => {
//       if (payload.status === "SUCCESS") {
//         (state.status = payload.status), (state.data = payload.data);
//         state.isLoading = false;
//         state.isError = false;
//         state.message = payload.message;
//       } else {
//         (state.status = payload.status), (state.data = null);
//         state.isLoading = false;
//         state.isError = true;
//         state.message = payload.message;
//       }
//     },
//     [products.rejected]: (state, { payload }) => {
//       (state.status = payload.status), (state.data = null);
//       state.isLoading = false;
//       state.isError = true;
//       state.message = payload.message;
//     },
//   },
// });
// export const { getAllProducts } = productSlice.actions;
// export default productSlice.reducer;
