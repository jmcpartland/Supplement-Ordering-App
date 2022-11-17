import React, { useState, useEffect, useContext } from "react"
import { UserContext } from "../context/user"
import MySupplement from "./MySupplement"


const Supplements = () => {
    const [supplements, setSupplements] = useState([])
    const { loggedIn } = useContext(UserContext)

    useEffect(() => {
        fetch('/supplements')
        .then(res => res.json())
        .then(data => setSupplements(data))
    }, [])

    const listSupplements = supplements.map(s => <MySupplement key={s.id} supplement={s} />)

    if (loggedIn) {
        return (
            <div>
                <h2>My Supplements</h2>
                <br />
                    {listSupplements}

            </div>
        )
    } else {
        return (
            <div>
                <h3>You need to be logged in to see supplements</h3>
            </div>
        )
    }    
}

export default Supplements;