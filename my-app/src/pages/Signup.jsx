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

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [personalNumber, setPersonalNumber] = useState("");

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  const [errLastName, setErrLastName] = useState("");
  const [errPhoneNumber, setErrPhoneNumber] = useState("");
  const [errPersonalNumber, setErrPersonalNumber] = useState("");
  

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
    if (!email) {
      setErrEmail("Enter your email or mobile number");
    } else {
      if (!emailValidation(email)) {
        setErrEmail("Enter a valid email");
      }
    }
    if (!password) {
      setErrPassword("Enter your password");
    } else {
      if (password.length < 6) {
        setErrPassword("Minimum 6 characters required");
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
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      cPassword &&
      cPassword === password
    ) {
      setClientName("");
      setEmail("");
      setPassword("");
      setCPassword("");
    }
    try {
      dispatch(
        signup({
          first_name: clientName,
          last_name: lastName,
          phone_number: phoneNumber,
          email,
          password,
        })
      );

      // if ((response.status === 200, 201)) {
      setClientName("");
      setEmail("");
      setPassword("");
      setCPassword("");
      setRegistrationError("");
      setTimeout(() => {
        navigate("/signin");
      }, 1000);
      // } else {
      //   setRegistrationError(response.data.error);
      // }
    } catch (error) {
      console.error("Error during registration:", error.message);
      setRegistrationError(
        "Error during registration. Please try again later."
      );
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[370px] mx-auto flex flex-col items-center">
          <Link to="/">
            <img className="w-32 mt-5 mb-5" src={darkLogo} alt="darkLogo" />
          </Link>
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Create account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your name</p>
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
                <p className="text-sm font-medium">First name</p>
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
                <p className="text-sm font-medium">Email</p>
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
                <p className="text-sm font-medium">Mobile number</p>
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
                <p className="text-sm font-medium">Personal number</p>
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
                <p className="text-sm font-medium">Password</p>
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
                <p className="text-sm font-medium">Re-enter password</p>
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
                title="Continue"
              />
            </div>
            <p className="text-xs text-black leading-4 mt-4 mb-10">
              By creating an account, you agree to Amazon's
              <span className="text-[#0066c0] ml-1 mr-1 cursor-pointer hover:text-orange-700 hover:underline underline-offset-1">
                Conditions of Use
              </span>
              and
              <span className="text-[#0066c0] ml-1 cursor-pointer hover:text-orange-700 hover:underline underline-offset-1">
                Privacy Notice.
              </span>
            </p>
            <div>
              <p className="text-xs text-black -mt-6">
                Buying for work?
                <span className="ml-1 text-[#0066c0] hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer">
                  Create a free business account
                </span>
              </p>
              <p className="text-xs text-black">
                Already have an account?
                <Link to="/signin">
                  <span className="ml-1 text-[#0066c0] hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer">
                    Sign in
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
      <div className="w-full pb-10 bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center">
        <div className="flex items-center gap-6 py-8">
          <p className="text-xs text-[#0066c0] hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer">
            Conditions of use
          </p>
          <p className="text-xs text-[#0066c0] hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer">
            Privacy Notice
          </p>
          <p className="text-xs text-[#0066c0] hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer">
            Help
          </p>
        </div>
        <p className="text-xs text-gray-600">
          © 2024, Amazon.com-clone, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Signup;
