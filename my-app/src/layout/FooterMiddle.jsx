import React from "react";
import FooterMiddleList from "./FooterMiddleList";
import { logo, georgia } from "../assets/index";
import { MiddleList } from "../constants";
import { Link } from "react-router-dom";
import ToggleDarkMode from "../components/ToggleDarkMode";

const FooterMiddle = () => {
  const middleList = MiddleList();
  return (
    <div className="w-full bg-amazonLight text-white">
      <div className="w-full border-b-[1px] border-gray-500 p-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-6 md:place-items-center md:items-start">
            {middleList.map((item) => (
              <FooterMiddleList
                key={item._id}
                title={item.title}
                listItem={item.listItem}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex gap-6 items-center justify-center py-6">
        <Link to="/">
          <div>
            <img className="w-20 pt-3" src={logo} alt="logo" />
          </div>
        </Link>

        <div className="flex gap-2">
          <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazonYellow cursor-pointer duration-200 px-2 py-1">
            English
          </p>
        </div>
        <div className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazonYellow cursor-pointer duration-200 px-2 py-1">
          <img className="w-6" src={georgia} alt="flagImg" />
          <p>Georgia</p>
        </div>
      </div>
      <div className="flex justify-center items-center pb-5">
        <ToggleDarkMode />
      </div>
    </div>
  );
};

export default FooterMiddle;
