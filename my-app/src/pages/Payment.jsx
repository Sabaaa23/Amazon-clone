import React, { useState, useEffect } from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import { getCartItems, purchaseCartItems } from "../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { darkLogo } from "../assets";
import { useTranslation } from "react-i18next";

const Payment = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [dateYear, setDateYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [errName, setErrName] = useState("");
  const [errCardNumber, setErrCardNumber] = useState("");
  const [errDate, setErrDate] = useState("");
  const [errDateYear, setErrDateYear] = useState("");
  const [errCvc, setErrCvc] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    setErrName("");
  };
  const handleCardNumber = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    setCardNumber(input.slice(0, 16));
    setErrCardNumber("");
  };
  const handleDate = (e) => {
    setDate(e.target.value);
    setErrDate("");
  };
  const handleDateYear = (e) => {
    setDateYear(e.target.value);
    setErrDateYear("");
  };
  const handleCvc = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    setCvc(input.slice(0, 3));
    setErrCvc("");
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      await dispatch(getCartItems());
      handleCheckOut();
    };
    fetchCartItems();
  }, [dispatch]);

  const { cartProducts } = useSelector((state) => state.cart);

  const handleCheckOut = () => {
    if (cartProducts) {
      let totalPrice = 0;
      let totalItems = 0;
      cartProducts.forEach((item) => {
        totalPrice += item.count * item.cartProduct.price;
        totalItems += item.count;
      });
      setTotalPrice(totalPrice);
      setTotalItems(totalItems);
    }
  };

  const handlePurchase = () => {
    if (!name) {
      setErrName("Enter your name");
      return;
    }
    if (!cardNumber) {
      setErrCardNumber("Enter your card number");
      return;
    }
    if (cardNumber.length !== 16) {
      setErrCardNumber("Card number must be 16 digits");
      return;
    }
    if (!date) {
      setErrDate("Select your date");
      return;
    }
    if (!dateYear) {
      setErrDateYear("Enter your date");
      return;
    }
    if (!cvc) {
      setErrCvc("Enter your cvc");
      return;
    }
    dispatch(purchaseCartItems({ totalItems, totalPrice }));
    setTimeout(() => {
      navigate("/orders");
    }, 1000);
  };

  return (
    <div className="min-w-screen min-h-screen flex-col bg-gray-200 flex items-center justify-center px-5 pb-10 pt-4 dark:bg-amazonBlue">
      <Link to="/" className="w-32 pb-20">
        <img className="dark:bg-white" src={darkLogo} alt="darkLogo" />
      </Link>
      <div
        className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 dark:bg-amazonLight text-gray-700 dark:text-black"
        style={{ maxWidth: "300px" }}
      >
        <div className="w-full pt-1 pb-5">
          <div className="bg-amazonYellow text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
            <PaymentIcon />
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-center font-bold text-xl uppercase dark:text-white">
            {t("payment")}
          </h1>
        </div>
        <div className="mb-3">
          <label
            className="font-bold text-sm mb-2 ml-1 dark:text-white"
            htmlFor="cardName"
          >
            {t("nameoncard")}
          </label>
          <div>
            <Input
              className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-amazonYellow transition-colors"
              placeholder="Name on card"
              type="text"
              value={name}
              onChange={handleName}
              id="cardName"
              required
            />
            {errName && (
              <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                <span className="italic font-titleFont font-extrabold text-base">
                  !
                </span>
                {errName}
              </p>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label
            className="font-bold text-sm mb-2 ml-1 dark:text-white"
            htmlFor="cardNumber"
          >
            {t("cardnumber")}
          </label>
          <div>
            <Input
              className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-amazonYellow transition-colors"
              placeholder="0000 0000 0000 0000"
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumber}
              maxLength="16"
              required
            />
            {errCardNumber && (
              <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                <span className="italic font-titleFont font-extrabold text-base">
                  !
                </span>
                {errCardNumber}
              </p>
            )}
          </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
          <div className="px-2 w-1/2">
            <label
              className="font-bold text-sm mb-2 ml-1 dark:text-white"
              htmlFor="expirationMonth"
            >
              {t("date")}
            </label>
            <div>
              <select
                className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-amazonYellow transition-colors cursor-pointer"
                id="expirationMonth"
                onChange={handleDate}
                required
              >
                <option value="">Select Month</option>
                <option value="01">01 - January</option>
                <option value="02">02 - February</option>
                <option value="03">03 - March</option>
                <option value="04">04 - April</option>
                <option value="05">05 - May</option>
                <option value="06">06 - June</option>
                <option value="07">07 - July</option>
                <option value="08">08 - August</option>
                <option value="09">09 - September</option>
                <option value="10">10 - October</option>
                <option value="11">11 - November</option>
                <option value="12">12 - December</option>
              </select>
              {errDate && (
                <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                  <span className="italic font-titleFont font-extrabold text-base">
                    !
                  </span>
                  {errDate}
                </p>
              )}
            </div>
          </div>
          <div className="px-2 w-1/2">
            <select
              className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-amazonYellow transition-colors cursor-pointer"
              id="expirationYear"
              onChange={handleDateYear}
            >
              <option value="">Select Year</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
            {errDateYear && (
              <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                <span className="italic font-titleFont font-extrabold text-base">
                  !
                </span>
                {errDateYear}
              </p>
            )}
          </div>
        </div>
        <div className="mb-10">
          <label
            className="font-bold text-sm mb-2 ml-1 dark:text-white"
            htmlFor="securityCode"
          >
            {t("seccode")}
          </label>
          <div>
            <Input
              name={cvc}
              onChange={handleCvc}
              className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-amazonYellow transition-colors"
              placeholder="000"
              type="text"
              id="securityCode"
              maxLength="3"
              value={cvc}
              required
            />
            {errCvc && (
              <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                <span className="italic font-titleFont font-extrabold text-base">
                  !
                </span>
                {errCvc}
              </p>
            )}
          </div>
        </div>
        <div>
          <Button
            title={t("pay")}
            onClick={handlePurchase}
            className="block w-full max-w-xs mx-auto bg-amazonYellow hover:bg-amazonYellow focus:bg-amazonYellow text-white rounded-lg px-3 py-3 font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
