import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const logedinUserData = useSelector((state) => state.loginUser);
  console.log(logedinUserData);
  return (
    <>
      <div className="container">
        <h1 className="text-center">My Profile</h1>

        <h3>Name - {logedinUserData.name}</h3>
        <h3>E-mail - {logedinUserData.email}</h3>
        <h3>Mobile - {logedinUserData.mobile}</h3>
        <h3>Id - {logedinUserData._id}</h3>
      </div>
    </>
  );
};

export default Profile;
