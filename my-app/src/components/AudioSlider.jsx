import React, { useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AudioSlider = () => {
  const [slider, setSlider] = useState(null);
  const { t } = useTranslation();

  const { products, getProductsLoading } = useSelector(
    (state) => state.products
  );

  const audio = Array.isArray(products)
    ? products.filter((product) => product.category_name === "აუდიო")
    : [];

  if (getProductsLoading) {
    return <div>Loading...</div>;
  }

  const handleNext = () => {
    slider.slickNext();
  };

  const handlePrev = () => {
    slider.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[340px] h-[420px] xl:w-[340px] xl:h-[420px] lgl:w-[340px] lgl:h-[420px] lg:w-[340px] lg:h-[420px] mdl:w-[340px] mdl:h-[420px] md:w-[340px] md:h-[420px] sml:w-[340px] sml:h-[420px] sm:w-[340px] sm:h-[420px] bg-white mb-5 mt-5 xs:w-[300px] xs:h-[420px] dark:bg-amazonLight">
      <div className="w-[90%] md:w-[90%] mdl:w-[90%] sml:w-[90%] sm:w-[90%] xs:w-[80%] max-w-[1380px] m-auto pt-5">
        <div>
          <h1 className="font-titleFont font-semibold text-2xl pl-5 dark:text-white">
            {t("audio")}
          </h1>
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="w-full">
            <Slider
              ref={(slider) => setSlider(slider)}
              arrows={false}
              rtl={true}
              {...settings}
            >
              {audio.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <div className="p-2 mt-10" key={product.id}>
                    <div className="items-center flex flex-col">
                      <img
                        className="w-44 h-44 object-contain"
                        src={product.image}
                        alt={product.title}
                      />
                      <div className="flex items-center flex-col">
                        <h3 className="font-bold dark:text-white">
                          {product.title}
                        </h3>
                        <p className=" text-xs text-red-500">
                          ${product.price}
                        </p>
                        <p className="text-blue-500">{product.category_name}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 dark:text-white">
          <span onClick={handlePrev}>
            <ArrowBackIosIcon />
          </span>
          <span onClick={handleNext} className="dark:text-white">
            <ArrowForwardIosIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
export default AudioSlider;
