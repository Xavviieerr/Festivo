import React from "react";
import Friends from "../../assets/friends-with-pizza-drinks-low-angle.jpg";
import Logo from "../../assets/logo2.png";
import { capitalizeFirst } from "../../utils/capitalizeFirst";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.authReducer.authData.user);

  return (
    <div className="p-9">
      <div className="profile h-96 flex flex-col gap-5">
        <div className=" font-bold text-2xl text-gray-500">My Profile</div>
        <div
          className="topInfo shadow-[0px_3px_4px_1px_rgba(0,0,0,0.4)] mx-20
         flex flex-col rounded justify-center"
        >
          <img
            src={Friends}
            alt=""
            className="object-cover h-[190px] rounded-b-4xl "
          />
          <div className="p-3 rounded-full absolute top-[42%] left-[54%] bg-white">
            <img src={Logo} alt="" className="h-30 w-30  rounded-full" />
          </div>
          <div
            className="otherinfo mt-20 h-50 m-4 rounded-lg border border-gray-400
          p-4 z-[1000] bg-white
          "
          >
            <span className="font-bold text-gray-800 text-2xl">
              Personal information
            </span>
            <div className="flex items-center justify-between px-20 mt-2 py-5">
              <div>
                <ul className="list-disc text-gray-700">
                  <li>
                    <span className="font-bold">Firstname: </span>{" "}
                    <span className="text-sm">
                      {user.firstname
                        ? `${capitalizeFirst(user.firstname)}`
                        : "John"}
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">Lastname: </span>
                    <span className="text-sm">
                      {user.lastname
                        ? `${capitalizeFirst(user.lastname)}`
                        : "Doe"}
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">Email: </span>
                    <span className="text-sm">
                      {user.email
                        ? `${capitalizeFirst(user.email)}`
                        : "example@gmail.com"}
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-disc text-gray-700">
                  <li>
                    <span className="font-bold">Gender: </span>{" "}
                    <span className="text-sm">
                      {user.gender ? `${capitalizeFirst(user.gender)}` : "None"}
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">Status: </span>
                    <span className="text-sm">
                      {user.isAdmin ? "Admin" : "User"}
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">nationality: </span>
                    <span className="text-sm">
                      {user.nationality
                        ? `${capitalizeFirst(user.nationality)}`
                        : "None"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
