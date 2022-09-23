import React, { useState, useContext } from "react"
import { Route, useParams } from "react-router-dom"

import { UserContext } from "../context/user"

const Supplements = () => {
    const { user, loggedIn } = useContext(UserContext)
    const params = useParams()
    
    return(

        <h2>Supplements</h2>
    
    )
}

export default Supplements;