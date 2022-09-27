import React, { useState, useEffect, useContext } from "react"
import { Route, useParams } from "react-router-dom"
import { useNavigate, NavLink } from "react-router-dom"
import Supplement from "./Supplement"
import { UserContext } from "../context/user"


const Supplements = () => {
    const [supplements, setSupplements] = useState([])
    const { user, loggedIn } = useContext(UserContext)
    const params = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        fetch('/supplements')
        .then(res => res.json())
        .then(data => setSupplements(data))
    }, [])

    const listSupplements = supplements.map(s => <Supplement key={s.id} supplement={s} />)

    const handleCreateSupplement = () => {
        navigate('/supplement-form')
    }

    return(
        <div>
            <h2>Supplements</h2>

            <button onClick={ handleCreateSupplement }>Create Supplement</button>
            <br />
                {listSupplements}

        </div>
    )
}

export default Supplements;