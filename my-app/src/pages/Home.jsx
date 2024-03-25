import React, { useEffect } from "react";
import Banner from "../components/Home/Banner";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../slices/productsSlice";
import ProductSliders from "../components/SaleProductSliders";
import SmartphonesSlider from "../components/SmartPhonesSlider";
import LaptopsSlider from "../components/LaptopsSlider";
import GamingSlider from "../components/GamingSlider";
import AudioSlider from "../components/AudioSlider";
import TvSlider from "../components/TvSlider";
import TabletSlider from "../components/TabletSlider";
import PhotoSlider from "../components/PhotoSlider";

const Home = () => {
  const dispatch = useDispatch();
  const { products, pageSize } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts({ pageSize }));
  }, [dispatch, pageSize]);

  return (
    <div className="dark:bg-amazonBlue">
      <Banner />
      <div className="w-full -mt-10 xl:-mt-36 py-10">
        <div className="flex justify-center items-center">
          <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
            <div className="flex flex-col justify-center items-center space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 w-full">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png"
                    alt="girl-image"
                  />
                  <Button
                    title="Women"
                    className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  />

                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>

                <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                  <div className="relative group flex justify-center items-center h-full w-full">
                    <img
                      className="object-center object-cover h-full w-full"
                      src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png"
                      alt="shoe-image"
                    />
                    <Button
                      title="Shoes"
                      className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                    />
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                  </div>
                  <div className="relative group flex justify-center items-center h-full w-full">
                    <img
                      className="object-center object-cover h-full w-full"
                      src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
                      alt="watch-image"
                    />
                    <Button
                      title="Watches"
                      className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                    />

                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                  </div>
                </div>

                <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                    alt="girl-image"
                  />
                  <Button
                    title="Accessories"
                    className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
                <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                  <img
                    className="object-center object-cover h-full w-full hidden md:block"
                    src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                    alt="girl-image"
                  />
                  <img
                    className="object-center object-cover h-full w-full md:hidden"
                    src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                    alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                  />
                  <Button
                    title="Accessories"
                    className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              </div>
              <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
                <img
                  className="object-center object-cover h-full w-full hidden md:block"
                  src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                  alt="girl-image"
                />
                <img
                  className="object-center object-cover h-full w-full sm:hidden"
                  src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                  alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                />
                <Button
                  title="Accessories"
                  className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                />
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* STARTING CARDS */}

        {/* <div className="items-center justify-center mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <div className="w-[340px] h-[420px] flex justify-center items-center">
            <div className="grid grid-cols-2 gap-4">
              {products.slice(4, 8).map((product, index) => (
                <div key={index} className="w-1/2 h-1/2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-[340px] h-[420px] flex justify-center items-center max-w-[1480px]">
            <div className="grid grid-cols-2 gap-4">
              {products.slice(21, 25).map((product, index) => (
                <div key={index} className="w-full-1/2 h-1/2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-[340px] h-[420px] flex justify-center items-center">
            <div className="grid gap-4">
              {products.slice(18, 19).map((product, index) => (
                <div key={index} className="w-full h-full object-contain">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-[340px] h-[420px] flex justify-center items-center">
            <div className="flex flex-col gap-4 items-center">
              {products.slice(17, 18).map((product, index) => (
                <div key={index} className="w-2/2 h-2/2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
              <div className="flex flex-row">
                {products.slice(9, 12).map((product, index) => (
                  <div key={index} className="w-1/3 h-1/3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
        {/* ENDING CARDS */}

        <ProductSliders />
        <SmartphonesSlider />
        <div className="flex flex-wrap justify-around">
          <LaptopsSlider />
          <GamingSlider />
          <AudioSlider />
        </div>
        <TvSlider />
        <TabletSlider />
        <PhotoSlider />
      </div>
    </div>
  );
};

export default Home;
