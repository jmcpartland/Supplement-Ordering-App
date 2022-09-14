import React, { useState, useEffect } from "react";

// create context
const UserContext = React.createContext();

// create provider component

function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })

    }, [])

    const login = () => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    const signup = (user) => {
        setUser(user)
    }

    return (
        <UserContext.Provider value={{user, login, logout, signup}}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };