import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (params) => {
    const {
      categorySearchParams = "",
      minPrice = "",
      maxPrice = "",
      productName = "",
      onlySales = "",
      page = "1",
      pageSize = "100",
    } = params;
    try {
      const response = await fetch(
        `http://localhost:3000/product?categoryName=${encodeURIComponent(
          categorySearchParams === "ყველა" ? "" : categorySearchParams
        )}&page=${page}&pageSize=${pageSize}&minPrice=${minPrice}&maxPrice=${maxPrice}&onlySales=${onlySales}&productName=${productName}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error("Error fetching products: " + error.message);
    }
  }
);

const initialState = {
  products: [],
  getProductsLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.getProductsLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.getProductsLoading = false;
        state.products = action.payload.products;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.getProductsLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
