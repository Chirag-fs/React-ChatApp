// This is a React functional component named ConversationList
// It represents a list of conversations and message boxes for a specific user.

import React from "react";
import { useParams } from "react-router";
import "../stylesheets/rightSidebar.css";
import MessageBox from "./MessageBox";
function ConversationList(props) {

  // This defines the ConversationList component as a functional component that takes a single prop props
  const { contacts } = props;
  const { id } = useParams();
  const userId = parseInt(id);
  const user = contacts.find((contact) => contact.id === userId);

  return <>{user && <MessageBox user={user} />}</>;
}

export default ConversationList;
// This exports the ConversationList component so that it can be imported and used in other parts of the application