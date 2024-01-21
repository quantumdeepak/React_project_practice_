import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";



function Login() {
    let [username, setusername] = useState('')
    let [password, setpassword] = useState('')

    let {setUsr} = useContext(UserContext)


    let handleSubmit = (e) => {
        e.preventDefault()
        setUsr({username, password})
    }

  return <div>
    <h2>Login</h2>

    <input type="text" 
    value={username}
    onChange={ (e) => setusername(e.target.value)}
    placeholder="'username" />
    {"  "}
    <input type="text" 
    value={password}
    onChange={ (e) => setpassword(e.target.value)}
    placeholder="password" />
    <button onClick={handleSubmit}>Sbumit</button>
  </div>;
}

export default Login;