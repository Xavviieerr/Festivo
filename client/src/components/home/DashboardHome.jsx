import React from "react";
import { capitalizeFirst } from "../../utils/capitalizeFirst";
import { useSelector } from "react-redux";

const DashboardHome = () => {
  const data = useSelector((state) => state.authReducer.authData.user);
  return (
    <div className="p-8 flex flex-col h-full gap-3">
      <div className=" shadow-[0_3px_7px_-1px_rgba(0,0,0,0.3)] flex-[1] flex-col">
        <span>
          {`Welcome back, ${capitalizeFirst(data.firstname)}`}{" "}
          {data.gender === "male" ? "👋" : "🌸"}
        </span>
        <span>
          Ready to brighten someone’s day? Send a thoughtful wish and share the
          love.
        </span>
      </div>
      <div className="shadow-[0_3px_7px_-1px_rgba(0,0,0,0.3)] flex-[2]">
        short
      </div>
      <div className=" shadow-[0_3px_7px_-1px_rgba(0,0,0,0.3)] flex-[4]">c</div>
    </div>
  );
};

export default DashboardHome;
