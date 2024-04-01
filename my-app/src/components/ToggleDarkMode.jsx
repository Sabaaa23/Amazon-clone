import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ToggleDarkMode = () => {
  const [isDarkMode, setDarkMode] = useLocalStorage("isDark", false);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (isDarkMode) {
      root.classList.add("dark");
      body.classList.add("dark");
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex justify-end items-center w-[50px]">
      <div
        className="p-2 rounded-xl w-[50%] text-lg bg-white text-black h-[25px] flex justify-center items-center font-semibold"
        onClick={toggleDarkMode}
      >
        <LightModeIcon />
      </div>
      <div
        className="p-2 rounded-xl w-[50%] text-lg bg-black text-white h-[25px] font-semibold flex justify-center items-center"
        onClick={toggleDarkMode}
      >
        <DarkModeIcon />
      </div>
    </div>
  );
};

export default ToggleDarkMode;
