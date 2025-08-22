import UserDetailsForm from "../../components/home/UserDetailsForm";
import DashboardSideBar from "../../components/home/DashboardSideBar";
import DashboardTopBar from "../../components/home/DashboardTopBar";
import DashboardMainSection from "../../components/home/DashboardMainSection";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const isProfileComplete = useSelector(
    (state) => state.authReducer.authData?.user.isProfileComplete
  );
  return (
    <>
      {/* main content area */}
      <div className="grid grid-cols-[250px_1fr]  h-screen">
        {/* Sidebar */}
        <DashboardSideBar />
        {/* <div className="grid grid-rows-[auto_1fr]">
          <DashboardTopBar />
          <DashboardMainSection />
        </div> */}
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
