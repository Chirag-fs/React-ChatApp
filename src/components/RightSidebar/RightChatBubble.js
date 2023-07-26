import React from "react";

// Functional component declaration taking props as input
function RightChatBubble({ message, name, image }) {
  return (
    <>
      {/* Container for the chat bubble */}
      <div className="message-bubble mbr">
        {/* User's avatar */}
        <img src={image} style={styles.avatar} alt="sender-pic" />
        {/* Container for the message content */}
        <div className="right-bubble">
          {/* Container for the text message */}
          <div className="text-message">
            {/* Displaying the sender's name */}
            <p className="name">{name}</p>
            {/* Displaying the message text */}
            <p className="message">{message.text}</p>
            {/* Displaying the message timestamp */}
            <span className="message-timestamp">{message.timestamp}</span>
          </div>
          {/* Right chat bubble's arrow */}
          <div className="bubble-arrow bubble-arrow-alt"></div>
        </div>
      </div>
    </>
  );
}

// Inline styles for the avatar image
const styles = {
  avatar: {
    width: "49px",
    height: "49px",
    borderRadius: "50%",
    margin: "0 10px",
  },
};

// Exporting the RightChatBubble component as the default export
export default RightChatBubble;
