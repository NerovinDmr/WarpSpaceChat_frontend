import React from "react";
import "./style.scss";
export const ChatRoom: React.FC = () => {
  return (
    <div className="chatRooom">
      <div className="chatRooom_wrapp">
        <div className="chatRooom_avatar">
          <img src="images/avatar.jpg" alt="ava" />
        </div>
        <div className="chatRooom_name">Chat name</div>
      </div>
      <div className="chatRooom_date"> 19:00 </div>
    </div>
  );
};
