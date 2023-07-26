// This is a React functional component named NewConversationTab. It represents a tab-like UI element for selecting a contact when starting a new conversation

import React from "react";
import ContactTab from "./ContactTab";

function NewConversationTab({ contacts, showNewConvoTab }) {
  // This defines the NewConversationTab component as a functional component that takes two props: contacts and showNewConvoTab
  
  let handleClose = () => { //This declares a variable handleClose, which is an arrow function that will be called when the user clicks on the close icon to hide the new conversation tab
    showNewConvoTab(false);
  };
  return (
    <>
      <div className="new-convo-tab">
        <div className="nct-header">
          <p>Select Contact</p>
          <span onClick={handleClose}>
            <i className="fas fa-2x fa-times-circle"></i>
          </span>
        </div>
        <div className="nct-list" onClick={handleClose}>
          {contacts.map((contact, index) => (
            <ContactTab contact={contact} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default NewConversationTab;
// This exports the NewConversationTab component so that it can be imported and used in other parts of the application