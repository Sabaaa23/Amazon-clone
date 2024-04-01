import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { emptyCart } from "../assets";
import { Link } from "react-router-dom";
import Payment from "../pages/Payment";
import { useTranslation } from "react-i18next";
import {
  getCartItems,
  deleteItemFromCart,
  incrementQuantity,
  decrementQuantity,
  deleteAllItemsFromCart,
  clearCart,
  addItemToCart,
} from "../slices/cartSlice";

const Cart = () => {
  const [getCartProducts, setGetCartProducts] = useState([]);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { cartProducts } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    setGetCartProducts(cartProducts);
  }, []);

  const deleteCart = (cartId) => {
    dispatch(deleteItemFromCart(cartId));
  };

  const handleIncrement = async (itemId) => {
    try {
      dispatch(addItemToCart({ product_id: itemId }));

      const updatedData = cartProducts.map((item) =>
        item.cartProduct.id === itemId
          ? { ...item, count: item.count + 1 }
          : item
      );
      setGetCartProducts(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecrement = (itemId) => {
    dispatch(deleteItemFromCart(itemId))
      .then(() => {
        const updatedData = cartProducts.map((item) =>
          item.id === itemId
            ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
            : item
        );

        setGetCartProducts(updatedData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllItemsFromCart());
  };

  useEffect(() => {
    if (Array.isArray(cartProducts)) {
      let totalPrice = 0;
      cartProducts.forEach((item) => {
        totalPrice += item.cartProduct.price * item.count;
      });
      setTotalPrice(totalPrice.toFixed(2));
    }
  }, [cartProducts]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <div className="w-full bg-gray-100 p-4 dark:bg-amazonBlue">
      {cartProducts.length > 0 ? (
        <div className="container mx-auto h-auto grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-8 clear-star">
          <div className="w-full h-full bg-white px-4 col-span-4  dark:bg-amazonLight">
            <div className="font-titleFont flex items-center xl:flex-row lgl:flex-row lg:flex-row mdl:flex-row md:flex-col sml:flex-col sm:flex-col xs:flex-col justify-between border-b-[1px] border-b-gray-400 py-3">
              <h2 className="text-3xl font-medium dark:text-white">
                {t("shoppingcart")}
              </h2>
              <h4 className="text-xl font-normal dark:text-white">
                {t("subtotal")}
              </h4>
            </div>
            <div>
              {cartProducts.map((item, index) => (
                <div
                  key={index + 1234}
                  className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center flex-col lgl:flex-row xl:flex-row gap-6"
                >
                  <div className="w-1/5">
                    <img
                      className="w-full h-44 object-contain"
                      src={item.cartProduct.image}
                      alt="ProductImg"
                    />
                  </div>
                  <div className="w-3/5">
                    <h2 className="font-semibold text-lg dark:text-white">
                      {item.cartProduct.title}
                    </h2>
                    <p className=" text-sm dark:text-white w-full">
                      {item.cartProduct.description.substring(0, 80)}..
                    </p>
                    <p className="text-base dark:text-white pt-2 pb-2">
                      {t("unitprice")}
                      <span className="font-semibold dark:text-white">
                        ${item.cartProduct.price}
                      </span>
                    </p>
                    <div className="bg-[#F0F2F2] flex justify-center items-center gap-1 w-36 py-1 text-center drop-shadow-lg rounded-md">
                      <p>{t("quantity")}:</p>
                      <Button
                        onClick={() => handleDecrement(item.id)}
                        title="-"
                        className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                      />
                      <p>{item.count}</p>
                      <Button
                        onClick={() => handleIncrement(item.cartProduct.id)}
                        title="+"
                        className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                      />
                    </div>
                    <Button
                      onClick={() => deleteCart(item.id)}
                      className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                      title={t("delete")}
                    />
                  </div>
                  <div>
                    <p className="text-lg font-titleFont font-semibold">
                      ${item.cartProduct.price * item.count}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full py-2">
              <Button
                onClick={handleDeleteAll}
                title={t("clearcart")}
                className="px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide"
              />
            </div>
          </div>
          <div className="w-full h-52 bg-white col-span-1 flex flex-col justify-center items-center p-4 dark:bg-amazonLight">
            <div className="flex justify-center items-center w-full">
              <p className="flex gap-2 items-start text-sm">
                <span className="dark:text-white">
                  <CheckCircleIcon className="bg-white text-green-500 rounded-full mr-1" />
                  {t("exploreship")}
                </span>
              </p>
            </div>
            <div>
              <p className="font-semibold px-10 py-1 flex items-center gap-2 justify-between dark:text-white">
                {t("subtotal")}:{" "}
                <span className="text-lg font-bold">${totalPrice}</span>
              </p>
            </div>
            <Link className="w-full" to="/payment">
              <Button
                className="w-full bg-yellow-400 rounded-md py-1.5 font-medium text-base mt-3 font-titleFont cursor-pointer hover:bg-yellow-500 active:bg-yellow-700"
                title={t("buy")}
              />
            </Link>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center items-center gap-4 py-10"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCartImg"
            />
          </div>
          <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <Button
                className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg"
                title="Continue Shopping"
              />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
