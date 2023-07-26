// This is a React functional component named LeftChatBubble.
// It represents a chat bubble for a message in a conversation, specifically for messages sent by the other participant
import React from "react";

function LeftChatBubble({ message, name, image }) {
// This defines the LeftChatBubble component as a functional component that takes three props: message, name, and image
  return (
    <>
      <div className="message-bubble mbl">
        <img src={image} style={styles.avatar} alt="sender-pic" />{" "}
        <div className="left-bubble ">
          <div className="text-message">
            <p className="name">{name}</p>
            <p className="message">{message.text}</p>
            <span className="message-timestamp">{message.timestamp}</span>
          </div>
          <div className="bubble-arrow "></div>
        </div>
      </div>
    </>
  );
}
const styles = {
  // This defines the styles object that contains custom CSS styles for the sender's profile image (avatar)
  avatar: {
    width: "49px",
    height: "49px",
    borderRadius: "50%",
    margin: "0 15px",
  },
};
export default LeftChatBubble;
// This exports the LeftChatBubble component so that it can be imported and used in other parts of the application
