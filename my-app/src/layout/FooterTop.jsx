import Button from "../components/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FooterTop = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { t } = useTranslation();
  const token = localStorage.getItem("user");

  useEffect(() => {
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [token]);
  return (
    <div
      className={
        isLoggedIn ? "hidden" : "w-full bg-white py-6 dark:dark:bg-amazonBlue"
      }
    >
      <div className="w-full border-t-[1px] border-b-[1px] py-8">
        <div className="w-64 mx-auto text-center flex flex-col gap-1">
          <p className="text-sm dark:text-white">{t("recomendations")}</p>
          <Link to="/signin">
            <Button
              className="w-full bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700"
              title={t("signin")}
            />
          </Link>

          <p className="text-xs mt-1 dark:text-white">
            {t("newmember")}
            <Link to="/signup">
              <span className="text-blue-600 ml-1 cursor-pointer">
                {t("start")}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
