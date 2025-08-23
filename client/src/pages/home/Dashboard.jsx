import UserDetailsForm from "../../components/home/UserDetailsForm";
import DashboardSideBar from "../../components/home/DashboardSideBar";
import SideBarItem from "../../components/home/SideBarItem";
import DashboardTopBar from "../../components/home/DashboardTopBar";
import DashboardHome from "../../components/home/DashboardHome";
import Profile from "../../components/home/Profile";
import DashboardEvents from "../../components/home/DashboardEvents";
import DashboardFriends from "../../components/home/DashboardFriends";
import Friend from "../../components/home/Friend";
import { useSelector } from "react-redux";
import {
  LuCalendar,
  LuLayoutDashboard,
  LuLogOut,
  LuUser,
} from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { useState } from "react";

const Dashboard = () => {
  const isProfileComplete = useSelector(
    (state) => state.authReducer.authData?.user.isProfileComplete
  );

  const [activeSection, setActiveSection] = useState("home");
  return (
    <>
      <div className="grid grid-cols-[auto_1fr]  h-screen">
        {/* Sidebar */}
        <DashboardSideBar>
          <SideBarItem
            icon={<LuLayoutDashboard />}
            text="Home"
            active={activeSection === "home"}
            onClick={() => setActiveSection("home")}
          />
          <SideBarItem
            icon={<LuUser />}
            text="Profile"
            active={activeSection === "profile"}
            onClick={() => setActiveSection("profile")}
          />
          <SideBarItem
            icon={<LuCalendar />}
            text="Events"
            active={activeSection === "events"}
            onClick={() => setActiveSection("events")}
          />
          <SideBarItem
            icon={<FaUserFriends />}
            text="Friends"
            active={activeSection === "friends"}
            onClick={() => setActiveSection("friends")}
          />
          <SideBarItem
            icon={<LuLogOut />}
            text="Logout"
            active={activeSection === "logout"}
            onClick={() => setActiveSection("logout")}
          />
        </DashboardSideBar>
        <div className="grid grid-rows-[auto_1fr]">
          {/* top nav bar */}
          <DashboardTopBar />

          {/* main section */}
          <div className="mainSection">
            {activeSection === "home" && <DashboardHome />}
            {activeSection === "profile" && <Profile />}
            {activeSection === "events" && <DashboardEvents />}
            {activeSection === "friends" && <DashboardFriends />}
          </div>
        </div>
      </div>

      {/* Form for requesting extra data from the user if their profile is not complete */}
      {!isProfileComplete && (
        <>
          <UserDetailsForm />
        </>
      )}
    </>
  );
};

export default Dashboard;
