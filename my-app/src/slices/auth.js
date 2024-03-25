import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../axios/axios";

const user = JSON.parse(localStorage.getItem("user"));

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ first_name, last_name, phone_number, email, password }) => {
    try {
      const response = await authApi.post(
        "http://localhost:3000/auth/register",
        {
          first_name,
          last_name,
          phone_number,
          email,
          password,
        }
      );
      localStorage.setItem("userInfo", JSON.stringify({ email, password }));

      return { token: data.access_token };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async ({ email, password }) => {
    try {
      const response = await authApi.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      if ((response.status == 200) === 201) {
        const errorData = response.data;
        throw new Error(errorData.message || "Failed to sign in");
      }

      const data = response.data;
      localStorage.setItem("userInfo", JSON.stringify({ email, password }));
      return { token: data.access_token };
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
);

export const signout = createAsyncThunk("auth/signout", () => {
  authApi.signout();
});

const initialState = {
  isLoggedIn: false,
  error: null,
  signinLoading: false,
  regLoading: false,
  signuped: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.regLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.signuped = action.payload;
        state.regLoading = false;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.error.message;
        state.regLoading = false;
      })
      .addCase(signin.pending, (state) => {
        state.signinLoading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.signinLoading = false;
      })
      .addCase(signin.rejected, (state, action) => {
        state.signinLoading = false;
        state.isLoggedIn = false;
        state.error = action.error.message;
      })
      .addCase(signout.fulfilled, (state) => {
        state.isLoggedIn = false;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
