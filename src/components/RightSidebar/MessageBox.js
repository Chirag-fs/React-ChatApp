// It includes components for left and right chat bubbles, message input, and a profile header

import React, { useEffect, useState } from "react";
import LeftChatBubble from "./LeftChatBubble";
import { useDispatch } from "react-redux";
import RightChatBubble from "./RightChatBubble";
import MessageInput from "./MessageInput";
import { addNewMessage } from "../../actions/contact";
import ProfileHeader from "../LeftSidebar/ProfileHeader";
function MessageBox(props) {
  const [chat, setChat] = useState([]);
  const [length, setLength] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    setChat(props.user.chatlog);
    setLength(props.user.chatlog.length);
  }, [props]);
  let updateMesssages = (message) => {
    let object = {
      text: message,
      timestamp: "12:00",
      sender: "me",
      message_id: length + 1,
    };
    dispatch(addNewMessage(object, props.user.id));
    // updatelength
    setLength(object.message_id);

    setChat([...chat, object]);
  };

  return (
    <>
      <div className="message-box">
        <div className="message-box-header" xs={6} sm={7} md={8} lg={7} xl={8}>
          <ProfileHeader user={props.user} />
        </div>
        {chat.length === 0 && (
          <p className="no-message-alert">NO MESSAGES FOUND</p>
        )}
        {chat.length > 0 && (
          <div className="messages-section">
            {chat.map((m, index) =>
              m.sender === "me" ? (
                <RightChatBubble
                  message={m}
                  key={index}
                  name={"Naman"}
                  image={
                    "data:image/jpeg;base64,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"
                  }
                />
              ) : (
                <LeftChatBubble
                  message={m}
                  key={index}
                  name={props.user.name}
                  image={props.user.image}
                />
              )
            )}
          </div>
        )}

        <MessageInput newMessageHandler={updateMesssages} user={props.user} />
      </div>
    </>
  );
}

export default MessageBox;