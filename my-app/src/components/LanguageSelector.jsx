import React, { useState } from "react";
import { georgia, usa, france } from "../assets";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";
import Input from "../components/Input";

const languages = [
  { code: "en", lang: "English", flag: usa },
  { code: "ge", lang: "Georgian", flag: georgia },
  { code: "fr", lang: "French", flag: france },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = languages.find((language) => {
    return localStorage.getItem("i18nextLng") === language.code;
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div
      className="relative headerHover"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex gap-1 items-center justify-center  cursor-pointer duration-200 px-2 py-1">
        <img className="w-5" src={selectedLanguage.flag} alt="flagImg" />
        <p className="uppercase text-sm ml-1">{selectedLanguage.code}</p>
        <span className="text-lighText clear-start mt-3">
          <ArrowDropDownIcon />
        </span>
      </div>
      {isOpen && (
        <div
          id="dropdownDefaultRadio"
          className="z-10 absolute duration-500 top-10 left-0  bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul
            className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownRadioButton"
          >
            {languages.map((language) => (
              <li key={language.code}>
                <div className="flex items-center">
                  <input
                    id={`default-radio-${language.code}`}
                    type="radio"
                    value={language.code}
                    name="default-radio"
                    className={`${
                      language.code === i18n.lang ? "selectedLanguage" : ""
                    }w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500`}
                    onChange={() => selectLanguage(language)}
                    checked={selectedLanguage.code === language.code}
                    onClick={() => changeLanguage(language.code)}
                  />
                  <label
                    htmlFor={`default-radio-${language.code}`}
                    className="uppercase ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {language.lang}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
