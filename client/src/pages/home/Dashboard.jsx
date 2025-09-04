import UserDetailsForm from "../../components/home/UserDetailsForm";
import DashboardSideBar from "../../components/home/DashboardSideBar";
import SideBarItem from "../../components/home/SideBarItem";
import DashboardTopBar from "../../components/home/DashboardTopBar";
import { useSelector } from "react-redux";
import { LuCalendar, LuLayoutDashboard, LuUser } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const isProfileComplete = useSelector(
    (state) => state.authReducer.authData?.user.isProfileComplete
  );

  return (
    <>
      <div className="grid grid-cols-[auto_1fr]  h-screen">
        {/* Sidebar */}
        <DashboardSideBar>
          <SideBarItem icon={<LuLayoutDashboard />} text="Home" to="/home" />
          <SideBarItem icon={<LuUser />} text="Profile" to="/home/profile" />
          <SideBarItem icon={<LuCalendar />} text="Events" to="/home/events" />
          <SideBarItem
            icon={<FaUserFriends />}
            text="Friends"
            to="/home/friends"
          />
        </DashboardSideBar>
        <div className="grid grid-rows-[auto_1fr]">
          {/* top nav bar */}
          <DashboardTopBar />

          {/* main section */}
          <Outlet />
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
