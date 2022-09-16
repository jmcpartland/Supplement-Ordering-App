import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { useNavigate, NavLink } from "react-router-dom"


const Navbar = () => {
    const { user, logout, loggedIn } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        
        // debugger

        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    if (loggedIn) {
        return (
            <div>
                <h1>Navbar</h1>
                <h2>Hello {user.username}</h2>
                <button onClick={ handleLogout }>Logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <NavLink to='/login'>
                    <button>Login</button>
                </NavLink>
                <NavLink to='/signup'>
                    <button>Signup</button>
                </NavLink>
                <hr/>
            </div>
        )
    }
}

export default Navbar;