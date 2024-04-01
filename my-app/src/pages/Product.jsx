import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { addItemToCart } from "../slices/cartSlice";
import Modal from "../components/Modal";
import { useTranslation } from "react-i18next";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { t } = useTranslation();
  const { itemId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/product/${itemId}`
        );
        if (response.statusText === "OK") {
          setProduct(response.data);
          setLoading(false);
        } else {
          setProduct({});
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setProduct({});
        setLoading(false);
      }
    };

    fetchData();
  }, [itemId]);

  return (
    <div className="w-full pb-14 dark:bg-amazonBlue">
      <div>
        <h2 className="flex justify-center dark:text-white items-center pt-16 mb-3 text-4xl font-medium md:text-xl lgl:text-4xl xl:text-4xl mdl:text-4xl sml:text-xl sm:text-xl xs:text-xl">
          {t("productdetails")}
        </h2>
      </div>
      <div className="flex justify-center dark:bg-amazonLight pb-5 pt-5 lgl:flex-row xl:flex lg:flex-row mdl:flex-row md:flex-col sml:flex-col sm:flex-col xs:flex-col items-center ">
        {loading ? (
          <p>Loading...</p>
        ) : true ? (
          <>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto flex items-center justify-center">
              <img
                className="w-80 h-80 object-contain"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-[500px] relative">
              <h2 className="font-titleFont tracking-wide text-lg text-amazonBlue font-medium dark:text-white">
                {product.title}
              </h2>
              <p className="text-sm text-gray-900 font-semibold dark:text-white">
                Price: ${product.price}
              </p>
              <p className="text-xs capitalize italic text-gray-900 dark:text-blue-400">
                {product.category_name}
              </p>
              <p className="mt-2 font-light dark:text-white">
                {product.description}
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center md:justify-between mt-5 space-y-2 md:space-y-0 md:space-x-2">
                {userInfo ? (
                  <Button
                    onClick={() =>
                      dispatch(
                        addItemToCart({
                          product_id: product.id,
                        })
                      )
                    }
                    title={t("addtocart")}
                    className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded"
                  />
                ) : (
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    title={t("addtocart")}
                    className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded"
                  />
                )}
                <Button
                  title={t("goback")}
                  className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded"
                  onClick={handleNavigate}
                />
              </div>
            </div>
          </>
        ) : (
          <p>No products found.</p>
        )}
      </div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Product;
