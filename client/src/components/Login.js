import React, { useContext, useState } from 'react';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const {login} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // debugger

        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => res.json())
        .then(user => {
            login(user)
            navigate('/')
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <lable>Username:</lable>
                <input 
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /> <br/>
                <lable>Password:</lable>
                <input 
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br/>
                <input type="submit" />
            </form>
            <ul>
                <h3>{error}</h3>
            </ul>
        </>

    )
}
export default Login