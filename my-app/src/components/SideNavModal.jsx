import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SideNavModal = ({ title, first, second, third }) => {
  return (
    <div className="py-3 border-b-[1px] border-b-gray-300">
      <h3 className="text-lg font-titleFont font-semibold mb-1 px-6 dark:text-white">
        {title}
      </h3>
      <ul className="text-sm dark:text-white">
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {first}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {second}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {third}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SideNavModal;
