import React, { useState, useEffect, useContext } from "react"
import { UserContext } from "../context/user"
import Order from "./Order"

const Orders = () => {
    const [orders, setOrders] = useState([])
    const { user, loggedIn } = useContext(UserContext)

    useEffect(() => {
        fetch('/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    const listOrders = orders.map(o => <Order key={o.id} order={o} />)

    return(
        <div>
            <h2>My Orders</h2>
            {listOrders}
        </div>
    )
}

export default Orders;