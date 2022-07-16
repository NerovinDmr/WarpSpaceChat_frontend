import React from "react";
import "./style.scss";
export const SignOut = () => {
  const [username, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  return (
    <form className="form-signup" action="" method="post" name="form">
      <label htmlFor="fullname">Name</label>
      <input
        className="form-styling"
        type="text"
        name="fullname"
        value={username}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <label htmlFor="email">Email</label>
      <input
        className="form-styling"
        type="text"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
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

      <button className="btn-signup">Sign Up</button>
    </form>
  );
};
