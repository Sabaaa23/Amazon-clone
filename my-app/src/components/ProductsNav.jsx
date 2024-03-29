import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../slices/productsSlice";
import { useSearchParams } from "react-router-dom";
import Button from "./Button";

const ProductsNav = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    if (searchParams) {
      handleGetProducts();
    }
  }, [searchParams]);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    // setSearchParams((params) => ({
    //   ...params,
    //   category_name: searchParams.get("category_name"),
    //   minPrice: e.target.value,
    //   maxPrice: searchParams.get("maxPrice"),
    //   productName: searchParams.get("productName"),
    // }));
  };

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
    // setSearchParams((params) => ({
    //   ...params,
    //   category_name: searchParams.get("category_name"),
    //   minPrice: searchParams.get("minPrice"),
    //   maxPrice: searchParams.get("maxPrice"),
    //   productName: e.target.value,
    // }));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    // setSearchParams((params) => ({
    //   ...params,
    //   category_name: searchParams.get("category_name"),
    //   minPrice: searchParams.get("minPrice"),
    //   maxPrice: e.target.value,
    //   productName: searchParams.get("productName"),
    // }));
  };

  // const min = searchParams.get("minPrice");
  // const max = searchParams.get("maxPrice");
  // const name = searchParams.get("productName");
  // const categorySearchParams = searchParams.get("category_name");

  const handleGetProducts = () => {
    setSearchParams((params) => ({
      ...params,
      category_name: searchParams.get("category_name"),
      minPrice: minPrice,
      maxPrice: maxPrice,
      productName: searchName,
    }));
  };
  return (
    <div className="left-0 top-24 h-full w-1/5 p-6 z-50 bg-gray-50 lgl:w-1/5 xs:w-full sm:w-full sml:w-full md:w-full  lg:w-full mdl:w-full xl:w-1/5 dark:bg-amazonLight">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        Price Filter
      </h2>
      <label htmlFor="minPrice" className="block mb-2 dark:text-white">
        Min Price:
      </label>
      <input
        type="number"
        id="minPrice"
        name="minPrice"
        placeholder="Enter Min Price"
        className="w-full py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
        value={minPrice}
        onChange={handleMinPriceChange}
      />
      <label htmlFor="maxPrice" className="block mb-2 dark:text-white">
        Max Price:
      </label>
      <input
        type="number"
        id="maxPrice"
        name="maxPrice"
        placeholder="Enter Max Price"
        className="w-full py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
        value={maxPrice}
        onChange={handleMaxPriceChange}
      />
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Brands</h2>
      <div>
        <input
          className="w-full py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
          placeholder="Search brand"
          value={searchName}
          onChange={handleSearchName}
        />
      </div>
      <Button
        className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded mt-3"
        title="Search"
        onClick={handleGetProducts}
      />
    </div>
  );
};

export default ProductsNav;
