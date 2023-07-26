// This is a React functional component named ContactTab that represents a tab-like UI element for a contact in a messaging application. 

import React from "react";
import ContactAvatar from "./ContactAvatar";
import ContactLastMessage from "./ContactLastMessage";
import ContactName from "./ContactName";
import { Link } from "react-router-dom";
function ContactTab(props) {
  // This defines the ContactTab component as a functional component that takes a single prop props
  const { image, name, chatlog, id } = props.contact;

  let length = chatlog.length; //This stores the length of the chatlog array in the length variable

  const noMessage = {
    //This defines an object noMessage with a text property that contains a message when there are no chat messages with the contact
    text: " 0 message Conversation not initiated",
  };
  return (
    <Link to={`/conversations/${id}`} className="link-tag">
      <div className="contact-tab" s>
        <div>
          {" "}
          <ContactAvatar image={image} />
        </div>

        <div style={{ marginLeft: "16px" }}>
          <ContactName name={name} />

          <ContactLastMessage
            chatlog={length > 0 ? chatlog[length - 1] : noMessage}
          />
        </div>
      </div>
    </Link>
  );
}

export default ContactTab;
// This exports the ContactTab component so that it can be imported and used in other parts of the application