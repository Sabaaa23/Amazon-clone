import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavModal from "../components/SideNavModal";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

const HeaderBottom = () => {
  const { t } = useTranslation();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const ref = useRef();
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSideBar(false);
      }
    });
  }, [ref, sideBar]);

  return (
    <div className="w-full px-4 h-[36px] bg-amazonLight text-white flex items-center">
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSideBar(true)}
          className="headerHover flex items-center gap-1 "
        >
          <MenuIcon />
          {t("all")}
        </li>
        <li className="headerHover hidden mdl:inline-flex">{t("deals")}</li>
        <li className="headerHover hidden mdl:inline-flex">{t("service")}</li>
        <li className="headerHover hidden mdl:inline-flex">{t("registry")}</li>
        <li className="headerHover hidden mdl:inline-flex">{t("giftCard")}</li>
        <li className="headerHover hidden mdl:inline-flex">{t("sell")}</li>
      </ul>
      {sideBar && (
        <div className="w-full h-full text-black fixed top-0 left-0 bg-amazonBlue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-[80%] md:w-[350px] h-full bg-white border border-black dark:bg-amazonBlue"
            >
              <div className="w-full bg-amazonLight text-white py-2 px-6 flex items-center gap-4">
                <AccountCircleIcon />
                {userInfo ? (
                  <div>
                    {" "}
                    <h3 className="font-titleFont font-bold text-lg tracking-wide">
                      {userInfo.email}
                    </h3>
                  </div>
                ) : (
                  <h3
                    className="font-titleFont font-bold text-lg tracking-wide"
                    onClick={() => {
                      Navigate("/signin");
                    }}
                  >
                    {t("signIn")}
                  </h3>
                )}
              </div>
              <SideNavModal
                title={t("titleSide1")}
                first={t("col11")}
                second={t("col12")}
                third={t("col13")}
              />
              <SideNavModal
                title={t("titleSide2")}
                first={t("col21")}
                second={t("col22")}
                third={t("col33")}
              />
              <SideNavModal
                title={t("titleSide3")}
                first={t("col31")}
                second={t("col32")}
                third={t("col33")}
              />
              <SideNavModal
                title={t("titleSide4")}
                first={t("col41")}
                second={t("col42")}
                third={t("col43")}
              />
              <span
                onClick={() => setSideBar(false)}
                className="cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
              >
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
