import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addItemToCart } from "../slices/cartSlice";
import {
  fetchLikedProducts,
  removeFromLikedProducts,
} from "../slices/wishListSlice";
import { useTranslation } from "react-i18next";

const WishList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { likedProducts } = useSelector((state) => state.wishList);
  const loading = useSelector((state) => state.wishList);
  const error = useSelector((state) => state.wishList);

  useEffect(() => {
    dispatch(fetchLikedProducts());
  }, [dispatch]);

  const handleRemoveFromLikedProducts = (product_id) => {
    dispatch(removeFromLikedProducts(product_id));
  };

  const [menuStates, setMenuStates] = useState({});

  const toggleMenu = (id) => {
    setMenuStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  return (
    <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center dark:bg-amazonBlue">
      <div className="flex flex-col jusitfy-start items-start">
        <div className="mt-3 text-center w-full">
          <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800 dark:text-white">
            {t("wishlist")} <FavoriteIcon className="text-red-600" />
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-2xl tracking-tight leading-6 text-gray-600 dark:text-white">
            {likedProducts.length} {t("items")}
          </p>
        </div>
        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-10 lg:gap-y-24">
          {likedProducts.map((product) => (
            <div className="flex flex-col" key={product.id}>
              <div className="relative">
                <img
                  className="my-10 pl-4 lg:pl-10 2xl:pl-20 w-full h-44 object-contain"
                  src={product?.likedProduct?.image}
                  alt={product?.likedProduct?.title}
                />
                <div
                  className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400"
                  onClick={() => handleRemoveFromLikedProducts(product.id)}
                >
                  <CloseIcon />
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="flex justify-center items-center">
                  <p className="tracking-tight text-lg font-semibold leading-6 text-gray-800 dark:text-white">
                    {product?.likedProduct?.title}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  {menuStates[product.id] ? (
                    <KeyboardArrowUpIcon
                      onClick={() => toggleMenu(product.id)}
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
                    />
                  ) : (
                    <KeyboardArrowDownIcon
                      onClick={() => toggleMenu(product.id)}
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
                    />
                  )}
                </div>
              </div>
              <div
                className={
                  menuStates[product.id]
                    ? "flex flex-col justify-start items-start mt-12"
                    : "hidden"
                }
              >
                <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white mb-4">
                  {product?.likedProduct?.category_name}
                </p>
                <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                  ${product?.likedProduct?.price}
                </p>
                <div className="flex justify-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                  <div className="w-full">
                    <Link
                      to={`/product/${product?.likedProduct?.id}`}
                      key={product.id}
                    >
                      <Button
                        title="More information"
                        className="focus:outline-none dark:text-black focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800  w-full tracking-tight py-4 text-lg leading-4 hover:bg-gray-300 hover:text-gray-800 bg-white border border-gray-800 dark:border-white dark:hover:bg-gray-800 dark:hover:text-white"
                      />
                    </Link>
                  </div>
                  <div className="w-full">
                    <Button
                      onClick={() =>
                        dispatch(
                          addItemToCart({
                            product_id: product?.likedProduct?.id,
                          })
                        )
                      }
                      title="Add to cart"
                      className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-black bg-gray-800 border border-gray-800 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
