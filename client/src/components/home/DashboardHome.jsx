import React from "react";
import { capitalizeFirst } from "../../utils/capitalizeFirst";
import { useSelector } from "react-redux";
import { FaCalendar, FaCalendarPlus, FaUserFriends } from "react-icons/fa";

const DashboardHome = () => {
  const data = useSelector((state) => state.authReducer.authData.user);
  return (
    <div className="p-8 flex flex-col h-full gap-3">
      <div className="flex shadow-[0_3px_7px_-1px_rgba(0,0,0,0.3)] flex-[1]  flex-col justify-center pl-5">
        <div className="font-bold text-gray-600 text-2xl">
          {`Welcome back, ${capitalizeFirst(data.firstname)}`}{" "}
          {data.gender === "male" ? "👋" : "🌸"}
        </div>
        <div className="text-sm pt-2 italic text-gray-500 font-medium">
          Ready to brighten someone’s day? Send a thoughtful wish and share the
          love.
        </div>
      </div>
      <div className="shadow-[0_3px_7px_-1px_rgba(0,0,0,0.3)] flex-[2] items-center justify-evenly flex ">
        <div
          className="p-6 px-5 rounded shadow-[2px_-2px_6px_-1px_rgba(0,0,0,0.3)]
         flex justify-evenly gap-7 items-center pl-2 border-b-4 border-blue-900"
        >
          <div className="">
            <FaUserFriends
              className="text-blue-400 rounded bg-gray-200"
              size={27}
            />
            <div className="font-medium text-gray-400 mt-2 italic">
              Total Friends
            </div>
          </div>

          <div className="font-bold text-3xl text-gray-600">256</div>
        </div>
        <div
          className="p-6 px-5 rounded shadow-[2px_-2px_6px_-1px_rgba(0,0,0,0.3)]
         flex justify-evenly gap-7 items-center pl-2 border-b-4 border-green-900"
        >
          <div className="">
            <FaCalendar
              className="text-green-400 rounded bg-gray-200"
              size={27}
            />
            <div className="font-medium text-gray-400 mt-2 italic">
              Total Completed Events
            </div>
          </div>

          <div className="font-bold text-3xl text-green-700">500</div>
        </div>

        <div
          className="p-6 px-5 rounded shadow-[2px_-2px_6px_-1px_rgba(0,0,0,0.3)]
         flex justify-evenly gap-7 items-center pl-2 border-b-4 border-yellow-900"
        >
          <div className="">
            <FaCalendarPlus
              className="text-yellow-400 rounded bg-gray-200"
              size={27}
            />
            <div className="font-medium text-gray-400 mt-2 italic">
              Total Upcoming Events
            </div>
          </div>

          <div className="font-bold text-3xl text-yellow-700">340</div>
        </div>
      </div>
      <div className=" shadow-[0_3px_7px_-1px_rgba(0,0,0,0.3)] flex-[4]">c</div>
    </div>
  );
};

export default DashboardHome;
