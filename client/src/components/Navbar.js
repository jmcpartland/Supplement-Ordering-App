import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom"


const Navbar = () => {
    const { user, logout } = useContext(UserContext)

    const handleLogout = () => {
        fetch('/logout')
        .then(() => {
            logout()
        })
    }

    if (user) {
        return (
            <div>
                <h1>Navbar</h1>
                <h2>Hello {user.username}</h2>
                    <br/>
                <button onClick={ handleLogout }>Logout</button>
            </div>
        );
    } else {
        return (
            <div>
                <NavLink to='/login'>
                    <button>Login</button>
                </NavLink>
                <NavLink to='/signup'>
                    <button>Signup</button>
                </NavLink>
            </div>
        )
    }
}

export default Navbar;