import { useParams } from "react-router-dom";
import Logo from "../../assets/logo2.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../utils/dateFormatter";
import { formatTime } from "../../utils/timeFormatter";
import { capitalizeFirst } from "../../utils/capitalizeFirst";
import { addEvents } from "../../redux/slice/eventSlice";
import { deleteEvent } from "../../redux/slice/eventSlice";

const EventDetail = () => {
  const { friendId } = useParams();
  const users = useSelector((state) => state.friendSlice.items);
  const user = Object.values(users).find((user) => user._id === friendId);
  const token = useSelector((state) => state.authReducer.authData.token);
  const allEvents = useSelector((state) => state.eventSlice.items);
  const events = Object.values(allEvents).filter(
    (event) => event.friendId.toString() === friendId
  );
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    datetime: "",
    eventType: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setOpen(false);
      setFormData({
        datetime: "",
        eventType: "",
      });
      dispatch(addEvents({ token, formData, friendId }));
    }
  };
  const handleDelete = (id) => {
    dispatch(deleteEvent({ token, id }));
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
                <li className="font-medium text-2xl">
                  {user
                    ? `${capitalizeFirst(user.firstname)} ${capitalizeFirst(
                        user.lastname
                      )}`
                    : "John Doe"}
                </li>
                <li className="font-medium">
                  {user ? `${user.relationship}` : "Brother"}
                </li>
                <li className="text-sm text-gray-500">
                  {user ? `${user.email}` : "example@email.com"}
                </li>
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
                      <button
                        onClick={() => handleDelete(event._id)}
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

          {/* create event pop up modal */}
          {open && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50">
              <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-lg font-bold">New Event</h2>

                {/* form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 z-[10000] max-w-md mx-auto p-4 border rounded"
                >
                  {/* time and date */}
                  <div>
                    <label className="block mb-1">Date and Time</label>
                    <input
                      type="datetime-local"
                      name="datetime"
                      value={formData.datetime}
                      onChange={handleChange}
                      className="w-full border p-2 rounded"
                    />
                    {errors.time && (
                      <p className="text-red-500 text-sm">{errors.datetime}</p>
                    )}
                  </div>
                  {/* event type */}
                  <div>
                    <label className="block mb-1">Event Type</label>
                    <input
                      type="text"
                      name="eventType"
                      placeholder="e.g. Birthday, Meeting..."
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full border p-2 rounded"
                    />
                    {errors.eventType && (
                      <p className="text-red-500 text-sm">{errors.eventType}</p>
                    )}
                  </div>
                  {/* submit button */}
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Create Event
                  </button>
                </form>

                {/* submit pop up button */}
                <button
                  onClick={() => setOpen(false)}
                  className="mt-3 text-red-500 bg-red"
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
