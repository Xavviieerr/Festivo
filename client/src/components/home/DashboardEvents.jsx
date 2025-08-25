import React from "react";

const DashboardEvents = () => {
  // Dummy data
  const events = [
    {
      username: "John",
      eventType: "Birthday",
      date: "2025-08-23",
      time: "09:00",
      status: "Scheduled",
    },
    {
      username: "Abdulsalam",
      eventType: "Birthday",
      date: "2025-08-23",
      time: "09:00",
      status: "Scheduled",
    },
    {
      username: "John",
      eventType: "Birthday",
      date: "2025-08-23",
      time: "09:00",
      status: "Scheduled",
    },
    {
      username: "John",
      eventType: "Birthday",
      date: "2025-08-23",
      time: "09:00",
      status: "Scheduled",
    },
    {
      username: "John",
      eventType: "Birthday",
      date: "2025-08-23",
      time: "09:00",
      status: "Scheduled",
    },
    {
      username: "John",
      eventType: "Birthday",
      date: "2025-08-23",
      time: "09:00",
      status: "Scheduled",
    },
  ];

  return (
    <div className="p-10">
      <div className="main ">
        <div className="flex flex-col gap-5">
          <div className="h-auto py-5 px-2 shadow-[0_3px_2px_-1px_rgba(0,0,0,0.4)]">
            <div className="font-bold text-4xl text-gray-700">Events</div>
            <span className="font-medium text-gray-600 mt-3">
              Track and manage all your scheduled well-wishes in one place.
            </span>
          </div>
          <div className="h-auto shadow-[2px_2px_4px_0px_rgba(0,0,0,0.3)]">
            <div className="ring">a</div>
            <div className="overflow-y-auto rounded mx-9 my-4 border border-gray-400 h-83">
              {/* <span className="text-gray-600 font-medium p-2">
                You do not have any event Scheduled...
              </span> */}
              <div className="h-12 border-b-2 border-gray-600">aa</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardEvents;
