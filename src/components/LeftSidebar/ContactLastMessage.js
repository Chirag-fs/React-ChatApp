//simple functional component in React named ContactLastMessage.
//  It takes a single prop named props, which is expected to contain an object with a property called chatlog 

import React from "react";

function ContactLastMessage(props) {
// This defines the ContactLastMessage component as a functional component that takes a single prop props
  return (
    <div className="contactText">
      <p> {props.chatlog.text}</p>
    </div>
  );
}

export default ContactLastMessage;
// This exports the ContactLastMessage component so that it can be imported and used in other parts of the application