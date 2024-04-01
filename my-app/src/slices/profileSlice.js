import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileApi from "../axios/axios";

export const handleUpdateUser = createAsyncThunk(
  "profile/updateUser",
  async (editedUserData) => {
    try {
      const response = await profileApi.put(
        "http://localhost:3000/user",
        editedUserData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating user data:", error);
      throw error;
    }
  }
);

export const getCurrentUserData = createAsyncThunk(
  "profile/getCurrentUserData",
  async () => {
    try {
      const response = await profileApi.get(
        "http://localhost:3000/user/current-user"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }
);
const initialState = {
  updatedUser: {},
  currentUser: {},
  putLoading: false,
  CurrUserLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleUpdateUser.pending, (state) => {
        state.putLoading = true;
      })
      .addCase(handleUpdateUser.fulfilled, (state, action) => {
        state.putLoading = false;
        state.updatedUser = action.payload;
      })
      .addCase(handleUpdateUser.rejected, (state, action) => {
        state.putLoading = false;
        state.error = action.error.message;
      })
      .addCase(getCurrentUserData.pending, (state) => {
        state.CurrUserLoading = true;
      })
      .addCase(getCurrentUserData.fulfilled, (state, action) => {
        state.CurrUserLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(getCurrentUserData.rejected, (state, action) => {
        state.CurrUserLoading = false;
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;
