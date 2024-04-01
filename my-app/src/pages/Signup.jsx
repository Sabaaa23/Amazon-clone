import React, { useState } from "react";
import axios from "axios";
import { darkLogo } from "../assets/index";
import Input from "../components/Input";
import Button from "../components/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from "react-router-dom";
import { use } from "i18next";
import { signup } from "../slices/auth";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [clientName, setClientName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [personalNumber, setPersonalNumber] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [errClientName, setErrClientName] = useState("");
  const [errLastName, setErrLastName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhoneNumber, setErrPhoneNumber] = useState("");
  const [errPersonalNumber, setErrPersonalNumber] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  const [registrationError, setRegistrationError] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setErrLastName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    setErrPhoneNumber("");
  };

  const handlePersonalNumber = (e) => {
    setPersonalNumber(e.target.value);
    setErrPersonalNumber("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your name");
    }
    if (!lastName) {
      setErrLastName("Enter last name");
    }
    if (!email) {
      setErrEmail("Enter your email or mobile number");
    } else {
      if (!emailValidation(email)) {
        setErrEmail("Enter a valid email");
      }
    }
    if (!phoneNumber) {
      setErrPhoneNumber("Enter your mobile number");
    }
    if (!personalNumber) {
      setErrPersonalNumber("Enter your personal number");
    }
    if (!password) {
      setErrPassword("Enter your password");
    } else {
      if (password.length < 9) {
        setErrPassword("Minimum 9 characters required");
      }
    }
    if (!cPassword) {
      setErrCPassword("Confirm your password");
    } else {
      if (cPassword !== password) {
        setErrCPassword("Passwords must match");
      }
    }

    if (
      clientName &&
      lastName &&
      email &&
      phoneNumber &&
      personalNumber &&
      emailValidation(email) &&
      password &&
      password.length >= 9 &&
      cPassword &&
      cPassword === password
    ) {
      setClientName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setPersonalNumber("");
      setPassword("");
      setCPassword("");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
    try {
      dispatch(
        signup({
          first_name: clientName,
          last_name: lastName,
          email,
          phone_number: phoneNumber,
          password,
        })
      );
      setClientName("");
      setEmail("");
      setPassword("");
      setCPassword("");
      setRegistrationError("");
    } catch (error) {
      console.error("Error during registration:", error.message);
      setRegistrationError(
        "Error during registration. Please try again later."
      );
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10 dark:bg-amazonBlue">
        <form className="w-[370px] mx-auto flex flex-col items-center">
          <Link to="/">
            <img
              className="w-32 mt-5 mb-5 dark:bg-white"
              src={darkLogo}
              alt="darkLogo"
            />
          </Link>
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4 dark:text-white">
              {t("createaccount")}
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium dark:text-white">
                  {t("firstname")}
                </p>
                <Input
                  placeholder="First name"
                  onChange={handleName}
                  value={clientName}
                  className="w-full py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                  style={{ fontSize: "0.75rem" }}
                />
                {errClientName && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {errClientName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium dark:text-white">
                  {t("lastname")}
                </p>
                <Input
                  placeholder="Last name"
                  onChange={handleLastName}
                  value={lastName}
                  className="w-full py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                  style={{ fontSize: "0.75rem" }}
                />
                {errLastName && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {errLastName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium dark:text-white">
                  {t("email")}
                </p>
                <Input
                  onChange={handleEmail}
                  value={email}
                  placeholder="email"
                  className="w-full lowercase py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                  style={{ fontSize: "0.75rem" }}
                />
                {errEmail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {errEmail}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium dark:text-white">
                  {t("mobilenumber")}
                </p>
                <Input
                  onChange={handlePhoneNumber}
                  value={phoneNumber}
                  placeholder="Mobile number"
                  className="w-full py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="number"
                  style={{ fontSize: "0.75rem" }}
                />
                {errPhoneNumber && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {errPhoneNumber}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium dark:text-white">
                  {t("personalnumber")}
                </p>
                <Input
                  placeholder="Personal number"
                  onChange={handlePersonalNumber}
                  value={personalNumber}
                  className="w-full lowercase py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="number"
                  style={{ fontSize: "0.75rem" }}
                />
                {errPersonalNumber && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {errPersonalNumber}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium dark:text-white">
                  {t("password")}
                </p>
                <Input
                  placeholder="At least 8 characters"
                  onChange={handlePassword}
                  value={password}
                  className="w-full py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                  style={{ fontSize: "0.75rem" }}
                  autocomplete="New password"
                />
                {errPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {errPassword}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium dark:text-white">
                  {t("repass")}
                </p>
                <Input
                  onChange={handleCPassword}
                  value={cPassword}
                  placeholder="Re-enter password"
                  className="w-full py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                  style={{ fontSize: "0.75rem" }}
                  autocomplete="New password"
                />
                {errCPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {errCPassword}
                  </p>
                )}
              </div>
              <Button
                onClick={handleSignup}
                className="w-full py-1.5 text-sm font-normal rounded-md bg-gradient-to-t from-[#f7dfa5] to-[#f0c15b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                title={t("continue")}
              />
            </div>
            <p className="text-xs text-black leading-4 mt-4 mb-10 dark:text-white">
              {t("createagree")}
              <span className="text-[#0066c0] ml-1 mr-1 cursor-pointer hover:text-orange-700 hover:underline underline-offset-1">
                {t("conofuse")}
              </span>
              {t("and")}
              <span className="text-[#0066c0] ml-1 cursor-pointer hover:text-orange-700 hover:underline underline-offset-1">
                {t("privacy")}
              </span>
            </p>
            <div>
              <p className="text-xs text-black -mt-6 dark:text-white">
                {t("buyforwork")}
                <span className="ml-1 text-[#0066c0] hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer">
                  {t("businessacc")}
                </span>
              </p>
              <p className="text-xs text-black dark:text-white">
                {t("haveanacc")}
                <Link to="/signin">
                  <span className="ml-1 text-[#0066c0] hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer">
                    {t("signin")}
                    <span>
                      <ArrowRightIcon />
                    </span>
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="dark:bg-amazonBlue dark:bg-gradient-to-t dark:from-amazonBlue dark:to-amazonBlue w-full pb-10 bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center">
        <div className="flex items-center gap-6 py-8">
          <p className="text-xs text-[#0066c0] hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer">
            {t("conofuse")}
          </p>
          <p className="text-xs text-[#0066c0] hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer">
            {t("privacy")}
          </p>
          <p className="text-xs text-[#0066c0] hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer">
            {t("help")}
          </p>
        </div>
        <p className="text-xs text-gray-600 dark:text-white">{t("creator")}</p>
      </div>
    </div>
  );
};

export default Signup;
