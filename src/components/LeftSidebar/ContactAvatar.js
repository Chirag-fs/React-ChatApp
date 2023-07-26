// This is a simple functional component in React named ContactAvatar
// It takes a single prop named image, which represents the URL of an avatar image
import React from "react";

function ContactAvatar({ image }) {
  // This defines the ContactAvatar component as a functional component that takes a single prop image
  return (
    <div>
      <img src={image} alt="user-avatar" className="avatar" />
    </div>
  );
}

export default ContactAvatar; // This exports the ContactAvatar component so that it can be imported and used in other parts of the application
