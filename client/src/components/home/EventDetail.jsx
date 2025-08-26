import React from "react";
import { useParams } from "react-router-dom";
import Logo from "../../assets/logo2.png";
import { useState } from "react";

const EventDetail = () => {
  const { eventsId } = useParams();
  const [open, setOpen] = useState(false);
  const events = [
    {
      id: 1,
      eventType: "Birthday",
      date: "2025-08-23",
      time: "09:00",
      status: "Completed",
    },
    {
      id: 2,
      eventType: "Birthday",
      date: "2025-08-23",
      time: "09:00",
      status: "Scheduled",
    },
    {
      id: 3,
      eventType: "Birthday",
      date: "2025-08-23",
      time: "09:00",
      status: "Completed",
    },
    {
      id: 4,
      eventType: "Birthday",
      date: "2025-08-23",
      time: "09:00",
      status: "Scheduled",
    },
    {
      id: 5,
      eventType: "Birthday",
      date: "2025-08-23",
      time: "09:00",
      status: "Completed",
    },
    {
      id: 6,
      eventType: "Birthday",
      date: "2025-08-23",
      time: "09:00",
      status: "Scheduled",
    },
  ];
  const handleDelete = () => {
    alert("boy");
  };
  return (
    <div className="p-10">
      <div className="main mx-20">
        <div className="flex flex-col gap-5">
          {/* top section */}
          <div className="h-auto py-5 px-2 flex justify-between items-end shadow-[0_3px_2px_-1px_rgba(0,0,0,0.4)]">
            <div className="flex gap-8 px-5">
              <img
                src={Logo}
                alt=""
                className="h-31 w-31 rounded-full object-cover"
              />
              <ul className="mt-10 ">
                <li className="font-medium text-2xl">John Doe</li>
                <li className="font-medium">Brother</li>
                <li className="text-sm text-gray-500">example@gmail.com</li>
              </ul>
            </div>
            <div>
              <button
                onClick={() => setOpen(true)}
                className="py-3 px-4 border-b-2 border-r-2 
              border-green-700 text-gray-500 text-medium transition-color rounded-xl hover:bg-green-100 "
              >
                Add Event
              </button>
            </div>
          </div>
          {/* bottom section */}
          <div className="h-auto shadow-[2px_2px_4px_0px_rgba(0,0,0,0.3)] ">
            <div className="border-b border-gray-400 py-3 grid grid-cols-5 px-14 mb-2 text-medium font-bold text-gray-600">
              <span>s/n</span>
              <span>Event Type</span>
              <span>Time</span>
              <span>Date</span>
              <span>Status</span>
            </div>
            <div className="overflow-y-auto rounded mx-6 my-2  px-4 h-60">
              {events[0] ? (
                <ul>
                  {events.map((event, index) => (
                    <li
                      key={event.id}
                      className="p-3 grid grid-cols-6
                   items-center rounded-b-md shadow-[0_2px_3px_-1px_rgba(0,0,0,0.4)]
                    border-b border-r-gray-200 mb-2"
                    >
                      <span className="font-medium">{index + 1}.</span>

                      <span className="text-sm text-gray-600">
                        {event.eventType}
                      </span>
                      <span className="text-sm text-gray-500">
                        {event.time}
                      </span>
                      <span className="text-sm text-gray-500">
                        {event.date}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs w-18 rounded-full ${
                          event.status === "Scheduled"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {event.status}
                      </span>
                      <button
                        onClick={() => handleDelete(event.id)}
                        className=" px-2 py-1 w-14 border-b-2 border-l-2 border-[#b45639ff] hover:bg-[#b45639ff] text-gray-700 rounded text-xs "
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <span>You do not have any events currently...</span>
              )}
            </div>
          </div>
          {open && (
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 flex items-center justify-center bg-black/50"
            >
              <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-lg font-bold">New Event</h2>
                <form>
                  <input
                    type="text"
                    placeholder="Event Name"
                    className="border p-2"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 ml-2"
                  >
                    Save
                  </button>
                </form>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-3 text-red-500"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
