import React from "react";
import { capitalizeFirst } from "../../utils/capitalizeFirst";
import { useSelector } from "react-redux";
import { FaCalendar, FaCalendarPlus, FaUserFriends } from "react-icons/fa";
import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from "recharts";
import { formatDate } from "../../utils/dateFormatter";
import { formatTime } from "../../utils/timeFormatter";

const DashboardHome = () => {
  const data = useSelector((state) => state.authReducer.authData.user);
  const events = useSelector((state) => state.eventSlice.items);
  const friends = useSelector((state) => state.friendSlice.items);

  const totalScheduledEvents = Object.values(events).filter(
    (event) => event.status !== "Completed"
  );
  const totalCompletedEvents = Object.values(events).filter(
    (event) => event.status !== "Scheduled"
  );

  const COLORS = ["#9e8635ff", "#41664fff"];
  const data01 = [
    { name: "Scheduled", value: totalScheduledEvents.length },
    { name: "Completed", value: totalCompletedEvents.length },
  ];

  return (
    <div className="p-8 flex flex-col h-full  gap-3">
      <div className="flex flex-[1]  flex-col justify-center pl-5">
        <div className="font-bold text-gray-600 text-2xl">
          {`Welcome back, ${capitalizeFirst(data.firstname)}`}{" "}
          {data.gender === "male" ? "👋" : "🌸"}
        </div>
        <div className="text-sm pt-2 italic text-gray-500 font-medium">
          Ready to brighten someone’s day? Send a thoughtful wish and share the
          love.
        </div>
      </div>
      <div className="shadow-[0_3px_2px_-1px_rgba(0,0,0,0.3)] flex-[2] items-center justify-evenly flex ">
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

          <div className="font-bold text-3xl text-gray-600">
            {friends ? `${friends.length}` : "256"}
          </div>
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

          <div className="font-bold text-3xl text-green-700">
            {events ? `${totalCompletedEvents.length}` : "500"}
          </div>
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
              Total Scheduled Events
            </div>
          </div>

          <div className="font-bold text-3xl text-yellow-700">
            {events ? `${totalScheduledEvents.length}` : "340"}
          </div>
        </div>
      </div>
      <div className="flex-[4] flex ">
        <div className="flex-[3] m-4 shadow-[4px_0_5px_-1px_rgba(0,0,0,0.3)]">
          <div className="m-3 text-2xl font-medium text-gray-700 ">
            Upcoming Events
          </div>
          <div className="border-t border-gray-200">
            <ul className="max-h-50 overflow-y-auto mx-5 my-2 text-gray-500 px-3 text-sm">
              {Object.values(events)
                .sort()
                .reverse()
                .map((event, index) => (
                  <li
                    key={index}
                    className="p-3 grid grid-cols-6
                   items-center rounded-b-md shadow-[0_2px_3px_-1px_rgba(0,0,0,0.4)]
                    border-b border-r-gray-200 mb-2"
                  >
                    <span className="font-medium">{index + 1}.</span>
                    <span className="ml-3">{event.friendName}</span>
                    <span className="text-sm text-gray-600">
                      {event.eventType}
                    </span>
                    <span className="text-sm text-gray-500">
                      {formatTime(event.datetime)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {formatDate(event.datetime)}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        event.status === "Scheduled"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {event.status}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex-[2] m-4 shadow-[4px_0_5px_-1px_rgba(0,0,0,0.3)]">
          <div className="m-3 text-2xl font-medium text-gray-700 border-b border-gray-200 pb-2">
            Chart
          </div>
          <ResponsiveContainer width="100%" height="80%">
            <PieChart>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={data01}
                cx="50%"
                cy="50%"
                outerRadius={70}
                label
              >
                {data01.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
