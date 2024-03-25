import React from "react";
import Button from "../components/Button";
import { nologcart } from "../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NoLogCart = () => {
  return (
    <motion.div
      initial={{ y: 70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex justify-center items-center gap-4 py-10 dark:bg-amazonBlue"
    >
      <div className="w-full">
        <div className="flex justify-center items-center gap-4 py-10">
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={nologcart}
              alt="nologcartImg"
            />
          </div>
          <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg dark:bg-amazonLight">
            <h1 className="font-titleFont text-xl font-bold dark:text-white">
              Your Amazon Cart is empty
            </h1>
            <Link className="w-full" to="/signin">
              <Button
                title="Sing in to your account"
                className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded mt-3"
              />
            </Link>

            <Link className="w-full" to="/signup">
              <Button
                title="Sign up now"
                className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded mt-3"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NoLogCart;
