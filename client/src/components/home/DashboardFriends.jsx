import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFriends } from "../../redux/slice/friendSlice";
import { useEffect } from "react";
import { deleteFriend } from "../../redux/slice/friendSlice";
import ConfirmDialog from "../ConfirmDialog";
import Loader from "../Loader";

const DashboardFriends = () => {
  const token = useSelector((state) => state.authReducer.authData.token);
  const friends = useSelector((state) => state.friendSlice.items);
  const loading = useSelector((state) => state.friendSlice.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends(token));
  }, [dispatch, token]);

  const handleDelete = (friendId) => {
    dispatch(deleteFriend({ token, friendId }));
  };
  return (
    <div className="p-10">
      <div className="main ">
        {loading && <Loader />}
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
                <ul className="">
                  {Object.values(friends)
                    .sort()
                    .reverse()
                    .map((friend, index) => (
                      <div className="flex gap-4 pr-10">
                        <Link
                          key={friend._id}
                          to={`/home/events/${friend._id}`}
                        >
                          <li
                            key={friend._id}
                            className="p-3 grid grid-cols-5 
                     items-center rounded-b-md shadow-[0_2px_3px_-1px_rgba(0,0,0,0.4)]
                      border-b border-r-gray-200 mb-2 mr-0"
                          >
                            <span className="font-medium">{index + 1}.</span>
                            <span className="ml-3 text-sm text-gray-700 text-medium">
                              <img
                                src="null"
                                alt=""
                                className="h-10 w-10 rounded-lg"
                              />
                            </span>
                            <span className="text-sm text-gray-600">
                              {friend.lastname} {friend.firstname}
                            </span>
                            <span className="text-sm text-gray-500">
                              {friend.relationship}
                            </span>
                            <span className="text-sm text-gray-500">
                              {friend.email}
                            </span>
                          </li>
                        </Link>
                        <ConfirmDialog
                          triggerText="Delete"
                          message={`Are you sure you want to remove ${friend.firstname} and all their events?`}
                          onConfirm={() => handleDelete(friend._id)}
                        />
                      </div>
                    ))}
                </ul>
              ) : (
                <span>You do not have any friends currently...</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFriends;
