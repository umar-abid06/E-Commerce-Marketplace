import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signup } from "../../services/index";

const initialState = {
  registeredUser: false,
  status: "",
  message: "",
  isError: false,
  isLoading: false,
  data: null,
};

export const userSignup = createAsyncThunk("user/signup", signup);

const userRegistrationSlice = createSlice({
  name: "userRegistration",
  initialState,
  reducers: {},
  extraReducers: {
    [userSignup.pending]: (state) => {
      state.isLoading = true;
      state.status = "PENDING";
    },
    [userSignup.fulfilled]: (state, { payload }) => {
      if (payload.status === "SUCCESS") {
        (state.status = payload.status),
          (state.registeredUser = payload.data.verified);
        state.isLoading = false;
        state.isError = false;
        state.message = payload.message;
        state.data = payload.data;
      } else {
        (state.status = payload.status), (state.data = payload.data);
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
        state.registeredUser = false;
      }
    },
    [userSignup.rejected]: (state, { payload }) => {
      (state.status = payload.status), (state.data = payload.data);
      state.isLoading = false;
      state.isError = true;
      (state.message = payload.message), (state.registeredUser = false);
    },
  },
});

// export const { userLogout } = userRegisterSlice.actions;
export default userRegistrationSlice.reducer;
