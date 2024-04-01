import React, { useState, useEffect } from "react";
import axios from "axios";
import { darkLogo } from "../assets/index";
import Input from "../components/Input";
import Button from "../components/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../slices/auth";
import { useTranslation } from "react-i18next";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const { user } = useSelector((state) => state.auth);
  const userToken = localStorage.getItem("user");

  useEffect(() => {
    if (userToken) {
      localStorage.setItem("userInfo", JSON.stringify({ email, password }));
      setEmail("");
      setPassword("");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [userToken]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Enter your email");
      return;
    }
    if (!password) {
      setErrPassword("Enter your password");
      return;
    }
    try {
      if (email && password) {
        dispatch(signin({ email, password }));
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      setRegistrationError("Error during login. Please try again later.");
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10 dark:bg-amazonBlue">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <Link to="/">
            <img
              className="w-32 mt-5 mb-5 dark:bg-white"
              src={darkLogo}
              alt="darkLogo"
            />
          </Link>
          <div className="w-full border border-zinc-200 p-6 dark:bg-amazonLight">
            <h2 className="font-titleFont text-3xl font-medium mb-4 dark:text-white">
              {t("signin")}
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium dark:text-white">
                  {t("emailornumber")}
                </p>
                <Input
                  onChange={handleEmail}
                  value={email}
                  className="w-full lowercase py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
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
                  {t("password")}
                </p>
                <Input
                  onChange={handlePassword}
                  value={password}
                  className="w-full py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
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
              <Button
                onClick={handleSignin}
                className="w-full py-1.5 text-md font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c15b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                title={t("continue")}
              />
            </div>
            <p className="text-xs text-black leading-4 mt-4 dark:text-white">
              {t("agree1")}
              <span className="text-[#0066c0] dark:text-white ml-1 mr-1 cursor-pointer hover:text-orange-700 hover:underline underline-offset-1">
                {t("agree2")}
              </span>
              {t("and")}
              <span className="dark:text-white text-[#0066c0] ml-1 cursor-pointer hover:text-orange-700 hover:underline underline-offset-1">
                {t("agree3")}
              </span>
            </p>
            <p className="text-xs text-gray-600 mt-4 cursor-pointer group flex items-center dark:text-white">
              <ArrowRightIcon />
              <span className="text-[#0066c0] group-hover:text-orange-700 group-hover:underline underline-offset-1">
                {t("needhelp")}
              </span>
            </p>
          </div>
          <div className="w-full text-xs text-gray-600 mt-4 flex items-center">
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            <span className="w-1/3 text-center dark:text-white">
              {t("newmember")}
            </span>
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
          </div>
          <Link className="w-full" to="/signup">
            <Button
              className="w-full py-1.5 mt-4 text-sm font-normal rounded-md bg-gradient-to-t from-slate-100 to-slate-50 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
              title={t("createacc")}
            />
          </Link>
        </form>
      </div>
      <div className="w-full pt-10 dark:bg-amazonBlue dark:bg-gradient-to-t dark:from-amazonBlue dark:to-amazonBlue bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center">
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

export default Signin;
