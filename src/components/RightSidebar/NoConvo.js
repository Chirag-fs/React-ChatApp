//It appears to be a part of a React chat application and is responsible for displaying a "no chat" or "welcome" message in the right sidebar when there are no conversations to display

import React from "react";
import "../stylesheets/rightSidebar.css";
function NoConvo() {
  // It's a basic component that doesn't take any props
  return (
    <div className="no-chat-background">
      <h2 style={{ margin: "2rem" }}>Welcome to React chat app buddy.</h2>
    </div>
  );
}

export default NoConvo;
// This line exports the NoConvo component as the default export. It means that when importing this module in another file, the NoConvo component will be imported as the default export