import React from "react";
import "./style.scss";
export const User: React.FC = () => {
  return (
    <div className="user">
      <div className="user_avatar">
        <img src="/images/useravatar.svg" alt="avatar" />
      </div>
      <div className="user_name"> User name </div>
    </div>
  );
};
