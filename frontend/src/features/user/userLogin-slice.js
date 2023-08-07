import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/index";
import Cookies from "js-cookie";

const initialState = {
  status: "",
  message: "",
  isError: false,
  isLoading: false,
  isAuthenticated: false,
  data: null,
  token: Cookies.get("Token") ? Cookies.get("Token") : null,
};

export const userLogin = createAsyncThunk("user/login", login);

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    userLogout: (state) => {
      state.data = null;
      state.token = Cookies.remove("Token");
      // localStorage.removeItem("loggedInUser");
      // window.location.href = "/";
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      (state.status = "PENDING"), (state.isLoading = true);
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      if (payload.status === "SUCCESS") {
        (state.status = payload.status), (state.data = payload.data);
        state.isLoading = false;
        state.isError = false;
        state.message = payload.message;
        state.isAuthenticated = true;
        state.token = payload.token;
        Cookies.set("Token", payload.token, { expires: 7 });
      } else {
        (state.status = payload.status), (state.data = null);
        state.isLoading = false;
        state.isError = true;
        state.message = payload.message;
        state.token = null;
      }

      // localStorage.setItem("loggedInUser", JSON.stringify(state.data));
    },
    [userLogin.rejected]: (state, { payload }) => {
      (state.status = payload.status), (state.data = null);
      state.isLoading = false;
      state.isError = true;
      state.message = payload.message;
      state.token = null;
    },
  },
});

export const { userLogout } = userLoginSlice.actions;
export default userLoginSlice.reducer;
