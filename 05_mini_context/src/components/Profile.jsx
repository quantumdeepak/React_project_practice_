import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    let {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>
    
    return  <div>Welcome {user.username}</div>
    // (
    // <div>
    //     <h2>Welcome</h2>
    //     <p>Username: {user.username}</p>
    // </div>
    // )
}

export default Profile;