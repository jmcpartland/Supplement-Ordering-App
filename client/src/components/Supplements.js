import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/user"
import Supplement from "./Supplement"


const Supplements = () => {
    const [supplements, setSupplements] = useState([])
    const { loggedIn } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/supplements')
        .then(res => res.json())
        .then(data => setSupplements(data))
    }, [])
    
    const handleCreateSupplement = () => {
        navigate('/supplement-form')
    }
    
    const handleDeleteSupplement = (supplement) => {
        const updatedSupplements = supplements.filter((s) => s.id !== supplement.id)
        setSupplements(updatedSupplements)
    }

    const listSupplements = supplements.map(s => <Supplement key={s.id} supplement={s} handleDeleteSupplement={handleDeleteSupplement} />)

    if (loggedIn) {
        return (
            <div>
                <h2>Supplements</h2>
                <button onClick={ handleCreateSupplement }>Create Supplement</button>
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