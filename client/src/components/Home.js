import React, { useContext } from "react";
import { UserContext } from "../context/user";

const Home = () => {
    const { user, loggedIn } = useContext(UserContext)
    
    // function capitalizeFirstLetter(name) {
    //     return name.charAt(0).toUpperCase() + name.slice(1);
    // }

    if (!loggedIn || user.error) {

        return(<h3>Please Login or Signup</h3>)
    }
    else {
        return(<h3>{user.username} Home</h3>)
    }
}

export default Home;