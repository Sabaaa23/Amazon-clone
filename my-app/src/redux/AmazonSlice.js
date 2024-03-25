// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   products: [],
//   getLoading: false,
//   userInfo: [],
//   language: "english",
//   likedProducts: [],
//   error: null,
// };

// // export const addItemToCart = createAsyncThunk(
// //   "amazon/addItemToCart",
// //   async (item) => {
// //     const response = await fetch("http://localhost:3000/cart", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
// //       },
// //       body: JSON.stringify(item),
// //     });
// //     const data = await response.json();
// //     return data;
// //   }
// // );

// // export const getCartItems = createAsyncThunk(
// //   "amazon/getCartItems",
// //   async () => {
// //     try {
// //       const response = await fetch("http://localhost:3000/cart", {
// //         method: "GET",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${localStorage.getItem("access_token")}`,
// //         },
// //       });

// //       if (!response.ok) {
// //         throw new Error("Failed to fetch cart items");
// //       }

// //       const data = await response.json();

// //       const productsWithQuantity = data.map((item) => ({
// //         ...item,
// //         quantity: 1,
// //       }));

// //       return productsWithQuantity;
// //     } catch (error) {
// //       console.error("Error fetching cart items:", error);
// //       throw error;
// //     }
// //   }
// // );

// // export const deleteItemFromCart = createAsyncThunk(
// //   "amazon/deleteItemFromCart",
// //   async (itemId) => {
// //     const response = await fetch(`http://localhost:3000/cart/${itemId}`, {
// //       method: "DELETE",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
// //       },
// //     });
// //     const data = await response.json();
// //     return itemId;
// //   }
// // );

// // export const fetchLikedProducts = createAsyncThunk(
// //   "wishlist/fetchLikedProducts",
// //   async (_, { rejectWithValue }) => {
// //     try {
// //       const response = await fetch("http://localhost:3000/liked-products", {
// //         method: "GET",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${localStorage.getItem("access_token")}`,
// //         },
// //       });
// //       if (!response.ok) {
// //         throw new Error("Failed to fetch liked products");
// //       }
// //       const data = await response.json();
// //       return data;
// //     } catch (error) {
// //       return rejectWithValue(error.message);
// //     }
// //   }
// // );

// // export const addToLikedProducts = createAsyncThunk(
// //   "wishlist/addToLikedProducts",
// //   async (item) => {
// //     const response = await fetch("http://localhost:3000/liked-products", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
// //       },
// //       body: JSON.stringify(item),
// //     });
// //     const data = await response.json();
// //     return data;
// //   }
// // );

// // export const removeFromLikedProducts = createAsyncThunk(
// //   "wishlist/removeFromLikedProducts",
// //   async (itemId) => {
// //     const response = await fetch(
// //       `http://localhost:3000/liked-products/${itemId}`,
// //       {
// //         method: "DELETE",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${localStorage.getItem("access_token")}`,
// //         },
// //       }
// //     );
// //     const data = await response.json();
// //     return itemId;
// //   }
// // );

// export const amazonSlice = createSlice({
//   name: "amazon",
//   initialState,
//   reducers: {
//     incrementQuantity: (state, action) => {
//       const item = state.products.find(
//         (item) => item.cartProduct.id === action.payload
//       );
//       if (item) {
//         item.quantity++;
//       }
//     },
//     decrementQuantity: (state, action) => {
//       const item = state.products.find(
//         (item) => item.cartProduct.id === action.payload
//       );
//       if (item && item.quantity > 1) {
//         item.quantity--;
//       }
//     },
//     resetCart: (state) => {
//       state.products = [];
//     },
//     // setUserInfo: (state, action) => {
//     //   state.userInfo = action.payload;
//     // },
//     userSignOut: (state, action) => {
//       state.userInfo = null;
//     },
//     setLanguage: (state, action) => {
//       state.language = action.payload;
//     },
//     // addToLikedProductsSuccess: (state, action) => {
//     //   state.likedProducts.push(action.payload);
//     // },
//     // addToLikedProductsFailure: (state, action) => {
//     //   state.error = action.payload;
//     // },
//   },

//   extraReducers: (builder) => {
//     builder;
//     // .addCase(addItemToCart.fulfilled, (state, action) => {
//     //   state.products = action.payload;
//     // })
//     // .addCase(getCartItems.pending, (state) => {
//     //   state.getLoading = true;
//     // })
//     // .addCase(getCartItems.fulfilled, (state, action) => {
//     //   state.getLoading = false;
//     //   state.products = action.payload;
//     // })
//     // .addCase(getCartItems.rejected, (state, action) => {
//     //   state.getLoading = false;
//     //   state.error = action.error.message;
//     // })
//     // .addCase(fetchLikedProducts.pending, (state) => {
//     //   state.loading = true;
//     //   state.error = null;
//     // })
//     // .addCase(fetchLikedProducts.fulfilled, (state, action) => {
//     //   state.loading = false;
//     //   state.likedProducts = action.payload;
//     //   state.error = null;
//     // })
//     // .addCase(fetchLikedProducts.rejected, (state, action) => {
//     //   state.loading = false;
//     //   state.error = action.payload;
//     // })
//     // .addCase(addToLikedProducts.fulfilled, (state, action) => {
//     //   state.likedProducts.push(action.payload);
//     // })
//     //     .addCase(removeFromLikedProducts.fulfilled, (state, action) => {
//     //       state.likedProducts = state.likedProducts.filter(
//     //         (product) => product.id !== action.payload
//     //       );
//     //     });
//   },
// });

// export const {
//   resetCart,
//   decrementQuantity,
//   incrementQuantity,
//   setUserInfo,
//   userSignOut,
//   setLanguage,
//   // addToLikedProductsSuccess,
//   // addToLikedProductsFailure,
// } = amazonSlice.actions;

// export default amazonSlice.reducer;
