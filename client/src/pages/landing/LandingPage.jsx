import React from "react";
import Navbar from "../../components/landing/Navbar";
import FriendsWithpizza from "../../assets/friends-with-pizza-drinks-low-angle.jpg";
import BucketOfChampagne from "../../assets/high-angle-bucket-with-champagne-bottle.jpg";
import Portrait from "../../assets/portrait-young-man-party-with-champagne-bottle.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div
        className="flex flex-auto h-5/6 items-center py-25.5 text-concrete-900
      sm:py-4"
      >
        <div className="flex justify-center gap-18">
          {/* side text */}
          <div className="w-1/3 ">
            <div className="font-bold text-6xl pb-3 sm:text-2xl">
              Celebrate Every Moment, Your Way
            </div>
            <div className="text-2xl text-ring-color sm:text-sm">
              💞 Send personalized heartfelt wishes to your loved ones. From
              birthdays to big wins — make it unforgettable.🎉🥂
            </div>
            <Link to="/auth">
              <button
                className="mt-10 text-white text-lg bg-ring-color rounded-full w-44 h-12
            hover:bg-white shadow-md transition ease-in hover:text-ring-color"
              >
                Let`s Party 🎁
              </button>
            </Link>
          </div>

          {/* side images */}
          <div className=" w-1/3 h-90 flex gap-4 shadow-lg">
            <img
              className=" w-1/2 object-cover rounded"
              src={FriendsWithpizza}
              alt=""
            />
            <div className="w-1/2 flex gap-4 flex-col">
              <img className=" h-1/2 rounded" src={Portrait} alt="" />
              <img
                className="h-1/2 rounded object-cover"
                src={BucketOfChampagne}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
