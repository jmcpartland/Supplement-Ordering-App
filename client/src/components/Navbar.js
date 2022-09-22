import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { useNavigate, NavLink } from "react-router-dom"

const Navbar = () => {
    const { user, logout, loggedIn } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    const handleShowSupplements = () => {
        fetch('/supplements')
        .then(res => res.json())
        .then(data => console.log(data))
    }


    if (loggedIn) {
        return (
            <div>
                <h1>Navbar</h1>
                <h2>Hello {user.username}</h2>
                <button onClick={ handleShowSupplements }>Show Supplements</button> | {' '}
                <button onClick={ handleLogout }>Logout</button>
                <hr/>
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