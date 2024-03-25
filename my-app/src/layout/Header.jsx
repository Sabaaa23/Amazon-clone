import React, { useState, useEffect, useCallback, useRef } from "react";
import { logo, georgia } from "../assets/index";
import { motion } from "framer-motion";
import axios from "axios";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Input from "../components/Input";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderBottom from "./HeaderBottom";
import {
  Link,
  useSearchParams,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";
// import { userSignOut } from "../redux/AmazonSlice";
import NoLogCart from "../pages/NoLogCart";
import { signout } from "../slices/auth";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const ref = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const [productCategories, setProductCategories] = useState([]);
  const { products } = useSelector((state) => state.products);
  // const userInfo = useSelector((state) => state.amazon.userInfo);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { cartProducts } = useSelector((state) => state.cart);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const scrollDirection = useScrollDirection();

  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && e.target && e.target.contains(ref.current)) {
        setShowBurgerMenu(false);
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [ref, showBurgerMenu]);

  const debounce = (func, delay) => {
    let timerId;
    return (...args) => {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedFetchSearchResults = useCallback(
    debounce(async (value) => {
      try {
        if (value.trim() !== "") {
          const response = await axios.get(
            `http://localhost:3000/product?productName=${encodeURIComponent(
              value
            )}`
          );
          setSearchResults(response.data.products);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }, 1300),
    []
  );

  const handleSearch = (value) => {
    setSearchTerm(value);
    debouncedFetchSearchResults(value);
  };

  useEffect(() => {
    const fetchProductCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/product-category"
        );
        setProductCategories(response.data);
      } catch (error) {
        console.error("Error fetching product categories:", error);
      }
    };

    fetchProductCategories();
  }, []);

  const handleSelectCategory = (name) => {
    navigate(`/products?category_name=${name}`);
  };

  useEffect(() => {
    !window.location.search && setSelectedCategory("");
  });

  const handleSignOut = () => {
    dispatch(signout());
    localStorage.removeItem("user");
    localStorage.removeItem("userInfo");
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection);
      return () => {
        window.removeEventListener("scroll", updateScrollDirection);
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  return (
    <div
      className={`w-full z-[99] sticky ${
        scrollDirection === "down" ? "-top-28" : "top-0"
      } top-0`}
    >
      <div className="bg-[#0F1111] w-full text-white px-4 py-3 flex items-center gap-4">
        <Link to="/" className="block">
          <div className="headerHover w-32 md:w-24 sml:w-24 xs:w-24 sm:w-24 lgl:w-32 xl:w-32 lg:w-24">
            <img
              className="w-24 relative inline-block mt-2"
              src={logo}
              alt="Logo"
            />
          </div>
        </Link>

        <Link to="/location">
          <div className="headerHover hidden lgl:inline-flex xl:inline-flex">
            <LocationOnOutlinedIcon />
            <p className="text-sm text-lighText font-light flex flex-col">
              {t("delivery")}
              <span className="text-sm font-semibold -mt-1 text-whiteText">
                {t("deliveryCountry")}
              </span>
            </p>
          </div>
        </Link>

        <div className="h-10 rounded-md flex lgl:flex md:hidden xl:flex 2xl:flex mdl:flex xs:hidden sm:hidden sml:hidden flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-16 pl-2 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazonBlue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            {t("all")}
            <span></span>
            <ArrowDropDownIcon />
          </span>
          {showAll && (
            <div>
              <ul className="absolute dark:bg-amazonLight w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazonBlue text-black p-2 flex-col gap-1 z-50">
                {productCategories.map((category) => (
                  <li
                    onClick={() => handleSelectCategory(category.name)}
                    key={category.id}
                    className="text-sm dark:text-white tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazonBlue cursor-pointer duration-200"
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="relative flex w-full lgl:flex md:hidden xl:flex 2xl:flex mdl:flex xs:hidden sm:hidden sml:hidden">
            <Input
              className="w-full py-1 mdl:w-full xl:w-full lgl:w-full md:w-full border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] text-amazonBlue focus-within:shadow-amazonInput duration-100"
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />

            {searchResults.length > 0 && (
              <div className="bg-white border dark:bg-amazonLight max-h-[100px] overflow-hidden overflow-y-scroll w-full mt-10 border-gray-300 rounded z-10 absolute shadow-md">
                {searchResults.map((result) => (
                  <Link to={`/product/${result.id}`} key={result.id}>
                    <div className="px-4 py-2 text-black cursor-pointer flex flex-row dark:text-white">
                      <img src={result.image} className="w-5" />
                      <div>
                        <p className="dark:text-white">{result.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <span className="w-12 h-full flex items-center justify-center bg-amazonYellow hover:bg-[#f3a847] duration-300 text-amazonBlue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>

        <div className="hidden lgl:inline-block xl:inline-block">
          <LanguageSelector />
        </div>

        <div
          className="flex-col items-start justify-center headerHover hidden sml:inline-block"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          {userInfo ? (
            <div className="">
              <p className="text-sm mdl:text-xs text-gray-100  mdl:text-lighText font-light">
                {userInfo.email}
              </p>
              <p className="text-sm font-semibold -mt-1 text-whiteText">
                {t("Account")}
                <span className="text-lighText">
                  <ArrowDropDownIcon />
                </span>
              </p>
              {showDropdown && (
                <div className="absolute top-12 right-[194px] bg-white border border-gray-300 rounded w-40 z-10">
                  <Link to="/profile">
                    <p className="text-black items-center flex justify-center p-2">
                      Profile
                    </p>
                  </Link>
                  <Link to="/wishlist">
                    <p className="text-black items-center flex justify-center p-2">
                      Wish List
                    </p>
                  </Link>

                  <Link to="/">
                    <p
                      className="p-2 cursor-pointer text-black items-center justify-center flex"
                      onClick={handleSignOut}
                    >
                      {t("signOut")}
                    </p>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/signin"
              className="flex flex-col items-start justify-center"
            >
              <p className="text-sm mdl:text-xs text-white mdl:text-lighText font-light ">
                {t("signIn")}
              </p>
              <p className="text-sm font-semibold -mt-1 text-whiteText">
                {t("Account")}
                <span className="text-lighText">
                  <ArrowDropDownIcon />
                </span>
              </p>
            </Link>
          )}
        </div>

        {userInfo && userInfo.email ? (
          <>
            <Link to="/orders">
              <div className="hidden lgl:flex xl:flex flex-col items-start justify-center headerHover">
                <p className="text-xs text-lighText font-light">
                  {t("return")}
                </p>
                <p className="text-sm font-semibold -mt-1 text-whiteText">
                  {t("orders")}
                </p>
              </div>
            </Link>
            <Link to="/cart">
              <div className="flex items-start justify-center headerHover relative">
                <ShoppingCartIcon />
                <p className="text-xs font-semibold mt-3 text-whiteText">
                  {t("cart")}
                  <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazonBlue rounded-full flex justify-center items-center">
                    {cartProducts.length > 0 ? cartProducts.length : 0}
                  </span>
                </p>
              </div>
            </Link>
            <div className="hidden mdl:inline-block xl:hidden lgl:hidden md:inline-block sml:inline-block sm:inline-block xs:inline-block">
              <button onClick={toggleBurgerMenu}>
                <MenuIcon />
              </button>
              {showBurgerMenu && (
                <div className="w-full h-full text-black fixed top-0 left-0 bg-amazonBlue bg-opacity-50">
                  <div ref={ref} className="w-full h-full relative">
                    <motion.div
                      initial={{ x: 500, opacity: 0 }}
                      animate={{ x: 670, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="w-[80%] md:w-[350px] h-full bg-white border border-black"
                    >
                      <div className="absolute right-[15px] flex justify-center items-center w-full">
                        <ul>
                          <li>
                            <Link to="/orders">
                              <div className="lgl:flex flex-col items-start justify-center headerHover">
                                <p className="text-xs text-black font-light">
                                  {t("return")}
                                </p>
                                <p className="text-sm font-semibold -mt-1 text-black">
                                  {t("orders")}
                                </p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <LanguageSelector />
                          </li>
                          <li>
                            <Link to="/location">
                              <div className="headerHover hidden mdl:inline-flex">
                                <LocationOnOutlinedIcon />
                                <p className="text-sm text-black font-light flex flex-col">
                                  {t("delivery")}
                                  <span className="text-sm font-semibold -mt-1 text-black">
                                    {t("deliveryCountry")}
                                  </span>
                                </p>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <span
                        onClick={() => setShowBurgerMenu(false)}
                        className="cursor-pointer absolute top-0 right-[82%] md:left-[0px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
                      >
                        <CloseIcon />
                      </span>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/emptyorders">
              <div className="hidden lgl:flex flex-col items-start justify-center headerHover">
                <p className="text-xs text-lighText font-light">
                  {t("return")}
                </p>
                <p className="text-sm font-semibold -mt-1 text-whiteText">
                  {t("orders")}
                </p>
              </div>
            </Link>
            <Link to="/emtpycart">
              <div className="flex items-start justify-center headerHover relative">
                <ShoppingCartIcon />
                <p className="text-xs font-semibold mt-3 text-whiteText">
                  {t("cart")}
                  <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazonBlue rounded-full flex justify-center items-center">
                    0
                  </span>
                </p>
              </div>
            </Link>
          </>
        )}
      </div>

      <div className="bg-[#0F1111] items-center justify-center flex w-full xl:hidden lg:hidden md:hidden">
        <span
          onClick={() => setShowAll(!showAll)}
          className="w-14 pl-2 h-[32px] bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazonBlue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
        >
          {t("all")}
          <span></span>
          <ArrowDropDownIcon />
        </span>
        {showAll && (
          <div>
            <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazonBlue text-black p-2 flex-col gap-1 z-50">
              {productCategories.map((category) => (
                <li
                  onClick={() => handleSelectCategory(category.name)}
                  key={category.id}
                  className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazonBlue cursor-pointer duration-200"
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="relative flex items-center justify-center w-full">
          <Input
            className="w-full py-1 xl:hidden lgl:hidden md:w-full mdl:w-full lg:hidden border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] text-amazonBlue focus-within:shadow-amazonInput duration-100"
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Amazon"
          />
          <span className="px-2 py-1 h-full flex items-center justify-center bg-amazonYellow hover:bg-[#f3a847] duration-300 text-amazonBlue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>

          {searchResults.length > 0 && (
            <div className="bg-white border w-full max-h-[100px] overflow-hidden overflow-y-scroll mt-[130px] border-gray-300 rounded z-10 absolute shadow-md">
              {searchResults.map((result) => (
                <Link
                  to={`/product/${result.id}`}
                  key={result.id}
                  className="text-black cursor-pointer flex flex-row px-4 py-2"
                >
                  <img src={result.image} className="w-5" alt={result.title} />
                  <div>
                    <p>{result.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* </div> */}
      </div>

      <HeaderBottom />
    </div>
  );
};

export default Header;
