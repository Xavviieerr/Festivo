import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { allUserEvents } from "../../redux/slice/eventSlice";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../utils/dateFormatter";
import { formatTime } from "../../utils/timeFormatter";
import { deleteEvent } from "../../redux/slice/eventSlice";
import ConfirmDialog from "../ConfirmDialog";

const DashboardEvents = () => {
  const token = useSelector((state) => state.authReducer.authData.token);
  const events = useSelector((state) => state.eventSlice.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUserEvents(token));
  }, [token, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteEvent({ token, id }));
  };

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
          <div className="h-auto shadow-[2px_2px_4px_0px_rgba(0,0,0,0.3)] ">
            <div className="border-b border-gray-400 py-3 grid grid-cols-6 px-14 mb-2 pr-47 text-medium font-bold text-gray-600">
              <span>s/n</span>
              <span>Name</span>
              <span>Event Type</span>
              <span>Time</span>
              <span>Date</span>
              <span>Status</span>
            </div>
            <div className="overflow-y-auto rounded mx-9 my-4  px-4 h-83">
              {events[0] ? (
                <ul>
                  {Object.values(events)
                    .sort()
                    .reverse()
                    .map((event, index) => (
                      <div className="flex gap-2">
                        <Link
                          key={event.friendId}
                          to={`/home/events/${event.friendId}`}
                        >
                          <li
                            key={event._id}
                            className="p-3 grid grid-cols-7
                   items-center rounded-b-md shadow-[0_2px_3px_-1px_rgba(0,0,0,0.4)]
                    border-b border-r-gray-200 mb-2"
                          >
                            <span className="font-medium">{index + 1}.</span>
                            <span className="ml-3 text-sm text-gray-700 text-medium">
                              {event.friendName}
                            </span>
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
                              className={`px-2 py-1 text-xs w-18 rounded-full ${
                                event.status === "Scheduled"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-green-100 text-green-700"
                              }`}
                            >
                              {event.status}
                            </span>
                          </li>
                        </Link>
                        <ConfirmDialog
                          triggerText="Delete"
                          message="Are you sure you want to delete this event?"
                          onConfirm={() => handleDelete(event._id)}
                        />
                      </div>
                    ))}
                </ul>
              ) : (
                <span>You do not have any events currently...</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardEvents;
