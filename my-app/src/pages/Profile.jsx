import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import { handleUpdateUser, getCurrentUserData } from "../slices/profileSlice";
import Input from "../components/Input";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [editedUserData, setEditedUserData] = useState({});
  const { updatedUser, currentUser } = useSelector((state) => state.profile);
  const userInfo = localStorage.getItem("userInfo");
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserData());
    setUserData(currentUser);
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    dispatch(handleUpdateUser(editedUserData));
    setUserData(updatedUser ? updatedUser : currentUser);
    setEditedUserData({});
  };

  return (
    <div className="flex justify-center items-center pt-10 pb-20 dark:bg-amazonBlue">
      {userInfo ? (
        <div>
          <h2 className="flex justify-center items-center mt-3 mb-3 text-3xl font-medium dark:text-white">
            {t("profile")}
          </h2>
          {userData ? (
            <div>
              <div className="items-center justify-center flex flex-col">
                <span className="dark:text-white">
                  {t("firstname")}: {userData.first_name}
                </span>
                <Input
                  className="w-full xl:w-full xs:w-[250px] xs:justify-center xs:flex xs:items-center xs:mx-0  py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                  name="first_name"
                  value={
                    editedUserData.first_name !== undefined
                      ? editedUserData.first_name
                      : userData.first_name
                  }
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5 items-center justify-center flex flex-col">
                <span className="dark:text-white">
                  {t("lastname")}: {userData.last_name}
                </span>
                <Input
                  className="w-full xl:w-full xs:w-[250px] xs:justify-center xs:flex xs:items-center xs:mx-0  py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                  name="last_name"
                  value={
                    editedUserData.last_name !== undefined
                      ? editedUserData.last_name
                      : userData.last_name
                  }
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5 items-center justify-center flex flex-col">
                <span className="dark:text-white">
                  {t("mobilenumber")}: {userData.phone_number}
                </span>
                <Input
                  className="w-full xl:w-full xs:w-[250px] xs:justify-center xs:flex xs:items-center xs:mx-0  py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="number"
                  name="phone_number"
                  value={
                    editedUserData.phone_number !== undefined
                      ? editedUserData.phone_number
                      : userData.phone_number
                  }
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5 items-center justify-center flex flex-col">
                <span className="dark:text-white">
                  {t("email")}: {userData.email}
                </span>
                <Input
                  className="w-full xl:w-full xs:w-[250px] xs:justify-center xs:flex xs:items-center xs:mx-0  py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="email"
                  name="email"
                  value={
                    editedUserData.email !== undefined
                      ? editedUserData.email
                      : userData.email
                  }
                  onChange={handleChange}
                />
              </div>
              <p className="mt-5 dark:text-white">
                {t("createdate")}: {userData.created_at}
              </p>
              <p className="mt-2 dark:text-white">
                {t("lastupdate")}: {userData.updated_at}
              </p>
              <Button
                className="w-full mt-5 py-1.5 text-md font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c15b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                title={t("savechanges")}
                onClick={handleSubmit}
              />
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
