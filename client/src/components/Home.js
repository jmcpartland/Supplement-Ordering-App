import React, { useContext } from "react";
import { UserContext } from "../context/user";

const Home = () => {
    const {user} = useContext(UserContext)
    
    // debugger;

    if (!user || user.error) {
        return(<h3>Please Login or Signup</h3>)
    }
    
    return (
        <div>
            <h3>{user.username} Home</h3>
        </div>
    );
}

export default Home;