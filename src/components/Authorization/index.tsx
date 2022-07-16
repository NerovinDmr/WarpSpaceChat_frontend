import React from "react";
import { SignIN } from "./SignIn";
import { SignOut } from "./SignOut";

import "./style.scss";

export const Authorization: React.FC = () => {
  const [active, setActive] = React.useState<Boolean>(false);
  return (
    <div className="container">
      <div className="frame">
        <div className="nav">
          <ul className="links">
            <li
              className={`signin ${!active ? "active" : ""}`}
              onClick={() => {
                setActive(false);
              }}
            >
              Sign in
            </li>
            <li
              className={`signup ${!active ? "" : "active"}`}
              onClick={() => {
                setActive(true);
              }}
            >
              Sign up
            </li>
          </ul>
        </div>
        {!active ? <SignIN /> : <SignOut />}
      </div>
    </div>
  );
};
