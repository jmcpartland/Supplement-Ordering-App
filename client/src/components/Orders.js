import React, { useState, useEffect, useContext } from "react"
import { UserContext } from "../context/user"

const Orders = () => {
    const { user, loggedIn } = useContext(UserContext)
    const { orders, setOrders } = useState([])

    useEffect(() => {
        fetch('/orders')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return(

        <h2>Orders</h2>
    
    )
}

export default Orders;