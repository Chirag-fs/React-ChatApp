// This is a React functional component named ProfileHeader. It represents a header section for a user's profile


import React from "react";

function ProfileHeader({ user }) { 
// This defines the ProfileHeader component as a functional component that takes a single prop user
  return (
    <>
      <div className="header">
        <img className="avatar" src={user.image} alt="profile-pic" />
        <p>{user.name}</p>
      </div>
    </>
    //  Closes the main <div> container for the header section
  );
}

export default ProfileHeader; //This exports the ProfileHeader component so that it can be imported and used in other parts of the application
