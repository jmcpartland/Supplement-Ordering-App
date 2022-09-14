import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom"

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConformation] = useState("")
    const [errorsList, setErrorsList] = useState([])

    const {signup} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/signup', { // configuration object
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
                // history.push('/')
            } else {
                setUsername("")
                setPassword("")
                setPasswordConformation("")
                const errorLis = user.errors.map(e => <li>{e}</li>)
                setErrorsList(errorLis)
            }
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
                <lable>Password Confirmation:</lable>
                <input 
                    type="password"
                    id="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConformation(e.target.value)}
                /> <br/>
                <input type="submit" />
            </form>
            <ul>
                <h3>{errorsList}</h3>
            </ul>
        </>

    )
}
export default Signup