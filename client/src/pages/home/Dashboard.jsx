import React from "react";
import UserDetailsForm from "../../components/home/UserDetailsForm";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const isProfileComplete = useSelector(
    (state) => state.authReducer.authData?.user.isProfileComplete
  );
  return (
    <>
      <div className="h1">Dashboard</div>

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
