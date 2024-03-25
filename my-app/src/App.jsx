import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route,
  ScrollRestoration,
  useNavigate,
} from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import { productsData } from "./api/Api";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment";
import NoLogCart from "./pages/NoLogCart";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import WishList from "./pages/WishList";
import Map from "./pages/Map";
import Products from "./components/Home/Products";
import Orders from "./pages/Orders";
import EmptyOrders from "./pages/EmptyOrders";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      navigate("/signin");
    }
  }, [navigate]);

  return localStorage.getItem("userInfo") ? <Outlet /> : null;
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={productsData}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/product/:itemId" element={<Product />} />
          <Route path="/emtpycart" element={<NoLogCart />}></Route>
          <Route path="/emptyorders" element={<EmptyOrders />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/wishlist" element={<WishList />}></Route>
            <Route path="/location" element={<Map />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
          </Route>
        </Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Route>
    )
  );
  return (
    <>
      <div className="font-bodyFont bg-gray-50">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
