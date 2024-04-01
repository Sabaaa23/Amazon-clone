import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../slices/productsSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductSliders = () => {
  const dispatch = useDispatch();
  const [slider, setSlider] = useState(null);
  const { t } = useTranslation();

  const { products, getProductsLoading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts({ onlySales: true }));
  }, [dispatch]);

  if (getProductsLoading) {
    return <div>Loading...</div>;
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
        },
      },
    ],
  };

  const handleNext = () => {
    slider.slickNext();
  };

  const handlePrev = () => {
    slider.slickPrev();
  };

  return (
    <div className="w-full bg-white mb-5 mt-5 relative dark:bg-amazonLight">
      <div className="w-[90%] md:w-[90%] mdl:w-[90%] sml:w-[90%] sm:w-[90%] xs:w-[80%] max-w-[1380px] m-auto mt-16 pt-5">
        <h1 className="font-titleFont font-semibold text-2xl dark:text-white">
          {t("discountedproducts")}
        </h1>
        <span
          className="absolute left-0 top-1/2 transform -translate-y-1/2 dark:text-white"
          onClick={handlePrev}
        >
          <ArrowBackIosIcon />
        </span>
        <span
          className="absolute right-0 top-1/2 transform -translate-y-1/2 dark:text-white"
          onClick={handleNext}
        >
          <ArrowForwardIosIcon />
        </span>
        <div className="flex w-full justify-center items-center">
          <div className="w-full">
            <Slider
              ref={(slider) => setSlider(slider)}
              arrows={false}
              rtl={true}
              {...settings}
            >
              {Array.isArray(products) &&
                products.map((product) => (
                  <div className="p-2" key={product.id}>
                    <div className="items-center flex flex-col">
                      <Link to={`/product/${product.id}`} key={product.id}>
                        <img
                          className="w-44 h-44 object-contain"
                          src={product.image}
                          alt={product.title}
                        />
                      </Link>
                      <div className="flex items-center flex-col">
                        <h3 className="font-bold dark:text-white">
                          {product.title}
                        </h3>
                        <p className=" text-xs line-through text-red-500">
                          ${product.price}
                        </p>
                        <p className="dark:text-yellow-300">
                          ${product.salePrice}
                        </p>
                        <p className="text-blue-500">{product.category_name}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductSliders;
