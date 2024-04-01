import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import purchasedApi from "../axios/axios";

export const purchasedItemsHistory = createAsyncThunk(
  "orders/purchasedItemsHistory",
  async () => {
    try {
      const response = await purchasedApi.get("/purchases", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching purchased items history:", error);
      throw error;
    }
  }
);

export const getpurchasedItems = createAsyncThunk(
  "orders/getPurchasedItems",
  async (itemId) => {
    try {
      const response = await purchasedApi.get(`/purchases/${itemId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error getting purchased item:", error);
      throw error;
    }
  }
);

export const deletePurchasedItems = createAsyncThunk(
  "orders/deletePurchasedItems",
  async (itemId, { dispatch }) => {
    try {
      const response = await purchasedApi.delete(`/purchases/${itemId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(purchasedItemsHistory());
      return response.data;
    } catch (error) {
      console.error("Error deleting purchased item:", error);
      throw error;
    }
  }
);

const initialState = {
  purchasedItems: [],
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(purchasedItemsHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(purchasedItemsHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.purchasedItems = action.payload;
        state.error = null;
      })
      .addCase(purchasedItemsHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getpurchasedItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getpurchasedItems.fulfilled, (state, action) => {
        state.loading = false;
        state.purchasedItems = action.payload;
        state.error = null;
      })
      .addCase(getpurchasedItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deletePurchasedItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePurchasedItems.fulfilled, (state, action) => {
        state.loading = false;
        state.purchasedItems = state.purchasedItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.error = null;
      })
      .addCase(deletePurchasedItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ordersSlice.reducer;
