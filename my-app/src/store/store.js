import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slices/auth";
import ProductsReducer from "../slices/productsSlice";
import CartReducer from "../slices/cartSlice";
import WishListReducer from "../slices/wishListSlice";
import ProfileReducer from "../slices/profileSlice";
import storage from "redux-persist/lib/storage";
import ordersReducer from "../slices/ordersSlice";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, AuthReducer);
const persistedProductsReducer = persistReducer(persistConfig, ProductsReducer);
const persistedCartReducer = persistReducer(persistConfig, CartReducer);
const persistedWishListReducer = persistReducer(persistConfig, WishListReducer);
const persistedProfileReducer = persistReducer(persistConfig, ProfileReducer);
const persistedOrdersReducer = persistReducer(persistConfig, ordersReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    products: persistedProductsReducer,
    cart: persistedCartReducer,
    wishList: persistedWishListReducer,
    profile: persistedProfileReducer,
    orders: persistedOrdersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
