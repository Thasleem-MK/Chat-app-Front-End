import React from "react";
import ReactEmoji from "react-emoji";
import "./Message.css";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{"you"}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div
      className={`messageContainer justifyStart ${
        user === "admin" ? "adminMessage" : null
      }`}
    >
      <div
        className="messageBox backgroundLight"
        style={
          user === "admin" ? { backgroundColor: "white", color: "black" , padding:0} : null
        }
      >
        <p
          className="messageText colorDark"   
          style={
            user === "admin" ? { float: "none", textAlign: "center" } : null
          }
        >
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p
        className={`sentText pl-10 ${user === "admin" ? "display-none" : null}`}
      >
        {user}
      </p>
    </div>
  );
};

export default Message;
