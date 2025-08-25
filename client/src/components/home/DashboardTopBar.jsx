import React from "react";
import Logo from "../../assets/logo2.png";
import { useSelector } from "react-redux";
import { capitalizeFirst } from "../../utils/capitalizeFirst";

const DashboardTopBar = () => {
  const data = useSelector((state) => state.authReducer.authData.user);

  return (
    <div className="flex justify-between items-center px-10 py-2 shadow-[0_4px_4px_-2px_rgba(0,0,0,0.3)]">
      <div className="font-bold text-xl text-concrete-700">Dashboard</div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col text-sm ">
          <span className="text-gray-800 leading-none text-lg font-bold">
            {data.firstname && data.lastname
              ? `${capitalizeFirst(data.firstname)} ${capitalizeFirst(
                  data.lastname
                )}`
              : "John Doe"}
          </span>
          <span className="text-xs flex flex-row-reverse text-gray-600">
            {data.admin ? "Admin" : "User"}
          </span>
        </div>
        <span className="h-12.5 w-12.5 rounded-full bg-gray-900 text-white flex justify-center items-center">
          <img
            src={Logo}
            className="rounded-full object-cover h-12 w-12"
            alt="profile picture"
          />
        </span>
      </div>
    </div>
  );
};

export default DashboardTopBar;
