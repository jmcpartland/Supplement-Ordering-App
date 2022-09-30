import React, { useState, useEffect, useContext } from "react"
import { UserContext } from "../context/user"
import Order from "./Order"

const Orders = () => {
    const { user, loggedIn } = useContext(UserContext)
    const { orders, setOrders } = useState([])

    useEffect(() => {
        fetch('/orders')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    // const listOrders = orders.map(o => <Order key={o.id} orders={o} />)

    return(
        <div>
            <h2>Orders</h2>
            {/* {listOrders} */}
        </div>
    )
}

export default Orders;