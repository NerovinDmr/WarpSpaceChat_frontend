import axios from "axios";
import React from "react";
import "./style.scss";
export const SignOut: React.FC = () => {
  const [username, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  

  return (
    <form className="form-signup" onSubmit={async (e)=>{
      e.preventDefault()
      await axios.post("http://localhost:4000/register",
    {
      username:username,
      password:password,
      email:email
    }
      
     
      )
    }}>
      <label htmlFor="name">name</label>
      <input
        className="form-styling"
        type="text"
        name="name"
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
<input type='submit'    className="btn-signup"/>
      
    </form>
   
  );
};
