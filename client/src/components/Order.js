import React, { useState, useContext } from "react"
import { Route, useParams } from "react-router-dom"

import { UserContext } from "../context/user"

const Order = () => {
    const { user, loggedIn } = useContext(UserContext)
    const params = useParams()
    
    return(

        <h2>Order</h2>
    
    )
}

export default Order;