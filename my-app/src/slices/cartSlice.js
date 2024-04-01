import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartApi from "../axios/axios";

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (item, { dispatch }) => {
    try {
      const response = await cartApi.post("http://localhost:3000/cart", item, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch(getCartItems());
      return response.data;
    } catch (error) {
      console.error("Error adding item to cart:", error);
      throw error;
    }
  }
);

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const response = await cartApi.get("http://localhost:3000/cart", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
});

export const deleteItemFromCart = createAsyncThunk(
  "cart/deleteItemFromCart",
  async (itemId, { dispatch }) => {
    try {
      await cartApi.delete(`http://localhost:3000/cart/${itemId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch(getCartItems());
      return itemId;
    } catch (error) {
      console.error("Error deleting item from cart:", error);
      throw error;
    }
  }
);

export const deleteAllItemsFromCart = createAsyncThunk(
  "cart/deleteAllItemsFromCart",
  async (_, { dispatch, getState }) => {
    try {
      const { cartProducts } = getState().cart;
      if (cartProducts.length === 0) {
        return;
      }
      for (const item of cartProducts) {
        await cartApi.delete(
          `http://localhost:3000/cart/${item.id}?removeAll=true`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      dispatch(clearCart());
    } catch (error) {
      console.error("Error deleting all items from cart:", error);
      throw error;
    }
  }
);

export const purchaseCartItems = createAsyncThunk(
  "cart/purchaseProduct",
  async (item, { dispatch }) => {
    try {
      const response = await cartApi.post(
        "http://localhost:3000/purchases",
        item,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      clearCart();
      return response.data;
    } catch (error) {
      console.error("Error adding item to cart:", error);
      throw error;
    }
  }
);

const initialState = {
  cartProducts: [],
  purchaseProducts: [],
  count: 0,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cartProducts.find((item) => item.id === itemId);
      if (item) {
        item.count++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cartProducts.find((item) => item.id === itemId);
      if (item && item.count > 1) {
        item.count--;
      }
    },
    clearCart: (state) => {
      state.cartProducts = [];
      state.purchaseProducts = [];
      state.count = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cartProducts = action.payload;
        state.count = action.payload.length;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addItemToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteItemFromCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteItemFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteAllItemsFromCart.fulfilled, (state) => {
        state.loading = false;
        state.cartProducts = [];
        state.count = 0;
      })
      .addCase(deleteAllItemsFromCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAllItemsFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { incrementQuantity, decrementQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
