import React from "react";
import UserDetailsForm from "../../components/home/userDetailsForm";
const isProfileComplete = true;
const Dashboard = () => {
  return (
    <>
      <div className="h1">Dashboard</div>
      {isProfileComplete && (
        <>
          <h1>Inner</h1>
          <UserDetailsForm />
        </>
      )}
    </>
  );
};

export default Dashboard;
