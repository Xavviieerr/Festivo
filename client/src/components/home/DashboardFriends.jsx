import React from "react";

const DashboardFriends = () => {
  const friends = [
    {
      id: "f1a2b3c4-0001-11ea-9f11-0a1234567890",
      name: "John Doe",
      username: "john.doe",
      email: "john.doe@example.com",
      phone: "+2348012345678",
      avatar: "https://i.pravatar.cc/150?u=john.doe",
      timezone: "Africa/Lagos",
      relationship: "Friend",
      notes: "Loves football and spicy food",
    },
    {
      id: "f1a2b3c4-0002-11ea-9f11-0a1234567890",
      name: "Abdulsalam Umar",
      username: "abdulsalam",
      email: "abdulsalam@example.com",
      phone: "+2348023456789",
      avatar: "https://i.pravatar.cc/150?u=abdulsalam",
      timezone: "Africa/Lagos",
      relationship: "Colleague",
      notes: "Works remote, prefers morning messages",
    },
    {
      id: "f1a2b3c4-0003-11ea-9f11-0a1234567890",
      name: "Mary Johnson",
      username: "mary.j",
      email: "mary.j@example.com",
      phone: "+1-202-555-0146",
      avatar: "https://i.pravatar.cc/150?u=mary.j",
      timezone: "America/New_York",
      relationship: "Friend",
      notes: "Use cheerful messages, likes emojis",
    },
    {
      id: "f1a2b3c4-0004-11ea-9f11-0a1234567890",
      name: "Paul Okoye",
      username: "paul.ok",
      email: "paul.ok@example.com",
      phone: "+44-7700-900123",
      avatar: "https://i.pravatar.cc/150?u=paul.ok",
      timezone: "Europe/London",
      relationship: "Family",
      notes: "Send formal wishes for anniversaries",
    },
    {
      id: "f1a2b3c4-0005-11ea-9f11-0a1234567890",
      name: "Lisa Chen",
      username: "lisa.c",
      email: "lisa.c@example.com",
      phone: "+852-9123-4567",
      avatar: "https://i.pravatar.cc/150?u=lisa.c",
      timezone: "Asia/Hong_Kong",
      relationship: "Friend",
      notes: "Prefers short messages in the morning",
    },
    {
      id: "f1a2b3c4-0006-11ea-9f11-0a1234567890",
      name: "James Mwangi",
      username: "james.m",
      email: "james.m@example.com",
      phone: "+254-712-345678",
      avatar: "https://i.pravatar.cc/150?u=james.m",
      timezone: "Africa/Nairobi",
      relationship: "Friend",
      notes: "Birthday on December 5th",
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
                  {events.map((event, index) => (
                    <Link key={event.id} to={`/home/events/${event.id}`}>
                      <li
                        key={event.id}
                        className="p-3 grid grid-cols-7
                     items-center rounded-b-md shadow-[0_2px_3px_-1px_rgba(0,0,0,0.4)]
                      border-b border-r-gray-200 mb-2"
                      >
                        <span className="font-medium">{index + 1}.</span>
                        <span className="ml-3 text-sm text-gray-700 text-medium">
                          {event.username}
                        </span>
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
                    </Link>
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

export default DashboardFriends;
