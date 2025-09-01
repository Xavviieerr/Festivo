import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFriends } from "../../redux/slice/friendSlice";
import { useEffect } from "react";

const DashboardFriends = () => {
  const token = useSelector((state) => state.authReducer.authData.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends(token));
  }, [dispatch, token]);

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
          <div className="h-auto flex justify-between items-end py-5 px-2 shadow-[0_3px_2px_-1px_rgba(0,0,0,0.4)]">
            <div>
              <div className="font-bold text-4xl text-gray-700">Friends</div>
              <span className="font-medium text-gray-600 mt-3">
                View all your loved ones and schedule a personalized wish.
              </span>
            </div>
            <div>
              <Link to={`/home/newfriend`}>
                <button
                  className="py-3 px-4 border-b-2 border-r-2 
              border-green-700 text-gray-500 text-medium font-bold transition-color rounded-xl hover:bg-green-100 "
                >
                  Add Friend
                </button>
              </Link>
            </div>
          </div>

          <div className="h-auto shadow-[2px_2px_4px_0px_rgba(0,0,0,0.3)] ">
            <div
              className="border-b border-gray-400 py-2 pl-18 grid grid-cols-5 px-3
             mb-2 pr-54 text-medium font-bold text-gray-600 "
            >
              <span>s/n</span>
              <span>Image</span>
              <span>Name</span>
              <span>Relationship</span>
              <span>email</span>
            </div>
            <div className="overflow-y-auto rounded mx-9 my-4  px-4 h-83">
              {friends[0] ? (
                <ul>
                  {friends.map((friend, index) => (
                    <Link key={friend.id} to={`/home/events/${friend.id}`}>
                      <li
                        key={friend.id}
                        className="p-3 grid grid-cols-6
                     items-center rounded-b-md shadow-[0_2px_3px_-1px_rgba(0,0,0,0.4)]
                      border-b border-r-gray-200 mb-2 mr-0"
                      >
                        <span className="font-medium">{index + 1}.</span>
                        <span className="ml-3 text-sm text-gray-700 text-medium">
                          <img
                            src={friend.avatar}
                            alt=""
                            className="h-10 w-10 rounded-lg"
                          />
                        </span>
                        <span className="text-sm text-gray-600">
                          {friend.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {friend.relationship}
                        </span>
                        <span className="text-sm text-gray-500">
                          {friend.email}
                        </span>

                        <button
                          className=" px-2 py-1 w-14 border-b-2 border-l-2 ml-16
                      border-[#b45639ff] hover:bg-[#b45639ff] text-gray-700 rounded text-xs "
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
