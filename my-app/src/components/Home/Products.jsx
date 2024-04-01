import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import GradeIcon from "@mui/icons-material/Grade";
import Button from "../Button";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addToLikedProducts } from "../../slices/wishListSlice";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import { addItemToCart } from "../../slices/cartSlice";
import { getProducts } from "../../slices/productsSlice";
import ProductsNav from "../ProductsNav";
import Modal from "../Modal";

const Products = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data = useLoaderData();
  const { products } = useSelector((state) => state.products);
  const [searchParams] = useSearchParams();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const categorySearchParams = searchParams.get("category_name");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const productName = searchParams.get("productName");

  const addToWishList = (product_id) => {
    dispatch(addToLikedProducts({ product_id }));
  };

  useEffect(() => {
    dispatch(
      getProducts({ categorySearchParams, minPrice, maxPrice, productName })
    );
  }, [searchParams]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-4 dark:bg-amazonBlue pb-10">
      <div className="flex flex-col lgl:flex-row">
        <ProductsNav />
        <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10 px-4">
          {products.map((item) => (
            <div
              className="bg-white dark:dark:bg-amazonLight h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
              key={item.id}
            >
              <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-900">
                {item.category_name}
              </span>
              <div className="w-full h-auto flex items-center justify-center relative group">
                <img
                  className="w-52 h-64 object-contain"
                  src={item.image}
                  alt="ProductImg"
                />
                <ul className="w-full h-36 bg-gray-100 dark:dark:bg-amazonLight absolute bottom-[-170px] flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-1 border-r group-hover:bottom-0 duration-700">
                  <li className="productLi dark:text-white">
                    {t("compare")}
                    <span>
                      <ApiIcon />
                    </span>
                  </li>
                  {userInfo ? (
                    <li
                      className="productLi dark:text-white"
                      onClick={() =>
                        dispatch(
                          addItemToCart({
                            product_id: item.id,
                          })
                        )
                      }
                    >
                      {t("addtocart")}
                      <span>
                        <ShoppingCartIcon />
                      </span>
                    </li>
                  ) : (
                    <li
                      className="productLi dark:text-white"
                      onClick={() => setIsModalOpen(true)}
                    >
                      {t("addtocart")}
                      <span>
                        <ShoppingCartIcon />
                      </span>
                    </li>
                  )}

                  <Link to={`/product/${item.id}`} key={item.id}>
                    <li className="productLi dark:text-white">
                      {t("details")}
                      <span>
                        <ArrowCircleRightIcon />
                      </span>
                    </li>
                  </Link>
                  {userInfo ? (
                    <li
                      className="productLi dark:text-white"
                      onClick={() => addToWishList(item.id)}
                    >
                      {t("addtowishlist")}
                      <span className="hover:text-red-600">
                        <FavoriteIcon />
                      </span>
                    </li>
                  ) : (
                    <li
                      className="productLi dark:text-white"
                      onClick={() => setIsModalOpen(true)}
                    >
                      {t("addtowishlist")}
                      <span className="hover:text-red-600">
                        <FavoriteIcon />
                      </span>
                    </li>
                  )}
                </ul>
              </div>
              <div className="px-4 z-10 bg-white dark:dark:bg-amazonLight">
                <div>
                  <h2 className="font-titleFont tracking-wide text-lg text-amazonBlue font-medium dark:text-white">
                    {item.title}
                  </h2>
                  <p className="dark:text-white">
                    {item.description.substring(0, 21)}
                  </p>
                  <div className="text-sm text-gray-900 font-semibold">
                    <div className="text-yellow-500">
                      <GradeIcon />
                      <GradeIcon />
                      <GradeIcon />
                      <GradeIcon />
                      <GradeIcon />
                    </div>
                    <p className="dark:text-white">${item.price}</p>
                  </div>
                </div>
                {userInfo ? (
                  <Button
                    onClick={() =>
                      dispatch(
                        addItemToCart({
                          product_id: item.id,
                        })
                      )
                    }
                    className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded mt-3"
                    title={t("addtocart")}
                  />
                ) : (
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded mt-3"
                    title={t("addtocart")}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Products;
