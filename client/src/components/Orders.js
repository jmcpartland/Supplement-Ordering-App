import React, { useState, useEffect, useContext } from "react"
import { UserContext } from "../context/user"
import Order from "./Order"

function Orders() {
    const [orders, setOrders] = useState([])
    const { loggedIn } = useContext(UserContext)

    function handleDeleteOrder(order) {
        const updatedOrders = orders.filter((o) => o.id !== order.id);
        setOrders(updatedOrders);
    }

    useEffect(() => {
        fetch('/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    

    const listOrders = orders.map(o => <Order key={o.id} order={o} handleDeleteOrder={handleDeleteOrder}/>)

    if (loggedIn) {
    return(
        <div className="stage">
            <h2>My Orders</h2>
            {listOrders}
        </div>
    )
    } else {
        return (
            <div className="stage">
                <h3>You need to be logged in to see supplements</h3>
            </div>
        )
    }
}

export default Orders;