import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";
export const SignIN: React.FC = () => {
  const [username, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [auth, setAuth]= React.useState<boolean>(false)
  let navigate = useNavigate();
  React.useEffect(() => {
    if (auth===true){
       return navigate("/");
    }else{return navigate("/auth");}
 },[auth]);
  return (
    <div>
      <form onSubmit={async (e)=>{
    e.preventDefault()
   await axios.post('http://localhost:4000/login',  {
    username:username,
    password:password
   }).then((response)=>{
      if (response.status===200){
        setAuth(true)
      }
   })
 
  }}>
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

        <input type={'submit'} className="btn-signin"/>
      </form>
    </div>
  );
};
