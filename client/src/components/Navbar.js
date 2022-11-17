import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { useNavigate, NavLink } from "react-router-dom"

function Navbar() {
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

    const handleShowAllSupplements = () => {
        navigate('/all-supplements')
    }

    const handleShowHome = () => {
        navigate('/')
    }

    const handleShowMySupplements = () => {
        navigate('/supplements')
    }

    const handleShowMyOrders = () => {
        navigate('/orders')
    }

    const handleCreateOrder = () => {
        navigate('/order-form')
    }

    if (loggedIn) {
        return (
            <div>
                <h1>Supplement Ordering App</h1>
                <h2>Hello {user.username}</h2>

                <button onClick={ handleShowHome }>Home</button> | {' '}
                <button onClick={ handleShowMySupplements }>Show My Supplements</button> | {' '}
                <button onClick={ handleShowMyOrders }>Show My Orders</button> | {' '}
                <button onClick={ handleCreateOrder }>Create New Order</button>  <br /><br />
                <button onClick={ handleShowAllSupplements }>Show All Supplements</button> | {' '}
                <button onClick={ handleLogout }>Logout</button>
                <hr/>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Supplement Ordering App</h1>

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