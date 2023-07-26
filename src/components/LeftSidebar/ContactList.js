import React from "react";
import ContactTab from "./ContactTab";

function ContactList({ contacts }) {
  // need contact tab component
  return (
    <>
      <div style={styles.contactList} className="contactscreen">
        {contacts.map((contact, index) => (
          <ContactTab contact={contact} key={index} />
        ))}
      </div>
    </>
  );
}
const styles = {
  // This defines the styles object, which contains CSS styles as inline styles.
  contactList: {
    overflowY: "scroll",
    height: "80vh",
    zIndex: "2",
    backgroundColor: "#fff",
  },
};
export default ContactList; //This exports the ContactList component so that it can be imported and used in other parts of the application
