import React from "react";
import "./style.scss";
export const SignIN: React.FC = () => {
  const [username, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  return (
    <div>
      <form className="form-signin" action="" method="post" name="form">
        <label htmlFor="username">Username</label>
        <input
          className="form-styling"
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          className="form-styling"
          type="text"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button className="btn-signin">Sign in</button>
      </form>
    </div>
  );
};
