import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import wishListApi from "../axios/axios";

export const fetchLikedProducts = createAsyncThunk(
  "wishlist/fetchLikedProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await wishListApi.get(
        "http://localhost:3000/liked-products",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addToLikedProducts = createAsyncThunk(
  "wishlist/addToLikedProducts",
  async (item) => {
    const response = await wishListApi.post(
      "http://localhost:3000/liked-products",
      item,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }
);

export const removeFromLikedProducts = createAsyncThunk(
  "wishlist/removeFromLikedProducts",
  async (itemId) => {
    const response = await wishListApi.delete(
      `http://localhost:3000/liked-products/${itemId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return itemId;
  }
);

const initialState = {
  likedProducts: [],
  getLoading: false,
  deleteLoading: false,
  addLoading: false,
  error: null,
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLikedProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLikedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.likedProducts = action.payload;
        state.error = null;
      })
      .addCase(fetchLikedProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addToLikedProducts.fulfilled, (state, action) => {
        state.wishListProducts = action.payload;
      })
      .addCase(removeFromLikedProducts.fulfilled, (state, action) => {
        state.likedProducts = state.likedProducts.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});

export default wishListSlice.reducer;
