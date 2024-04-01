import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ setIsModalOpen }) => {
  return (
    <>
      <div
        id="auth-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-gray-900 bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-2xl">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Sign up / Sign in
              </h3>
              <span
                onClick={() => setIsModalOpen(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-red-500 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <CloseIcon />
              </span>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Sign up or sign in to access exclusive content and features.
              </p>
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <Link to="/signup">
                <Button
                  type="button"
                  title="Sign up"
                  className="py-2.5 px-5 ms-3 text-sm font-medium bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 rounded-md"
                />
              </Link>
              <Link to="/signin">
                <Button
                  type="button"
                  title="Sign in"
                  className="py-2.5 px-5 ms-3 text-sm font-medium bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 rounded-md"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
