// This is a React functional component named NewConversation. It represents a UI element for starting a new conversation.

import React from "react";

function NewConversation(props) {
  // This defines the NewConversation component as a functional component that takes a single prop props
  let handleClick = () => { //This declares a variable handleClick, which is an arrow function that will be called when the user clicks on the "New Conversation" area
    props.showNewConvoTab(true);
  };
  return (
    <div className="new-convo">
      <p>New Conversation</p>
      <span onClick={handleClick}>
        <i className="fas fa-plus"></i>
      </span>
    </div>
  );
}

export default NewConversation;
// This exports the NewConversation component so that it can be imported and used in other parts of the application
