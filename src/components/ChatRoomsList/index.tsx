import React from "react";
import { ChatRoom } from "./ChatRoom";
import "./style.scss";
export const ChatRoomsList: React.FC = () => {
  return (
    <div className="chatRoomsList">
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
    </div>
  );
};
