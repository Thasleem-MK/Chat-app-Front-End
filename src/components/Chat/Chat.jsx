import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import "./Chat.css";

let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const endpoint = process.env.REACT_APP_ENDPOINT;
  if (!endpoint) {
    throw new Error("Missing endpoint");
  }
  const ENDPOINT = endpoint;

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);

    if (!socket) {
      socket = io(ENDPOINT);
    }

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.off();
    };
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  //function for sending messages
  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      const sanitizedMessage = message
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      socket.emit("sendMessage", sanitizedMessage, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
