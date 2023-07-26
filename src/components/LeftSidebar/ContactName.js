import React from "react";

function ContactName({ name }) {
  return (
    <div>
      <p style={styles.contactText}>{name}</p>
    </div>
  );
}
const styles = {
  // This defines the styles object, which contains CSS styles as inline styles
  contactText: {
    fontSize: "16px",
    color: "#000",
    marginBottom: "3px",
  },
};
export default ContactName; //This exports the ContactName component so that it can be imported and used in other parts of the application
