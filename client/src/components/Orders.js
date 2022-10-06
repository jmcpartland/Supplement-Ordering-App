import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/user"
import Order from "./Order"

function Orders() {
    const [orders, setOrders] = useState([])
    const { user, loggedIn } = useContext(UserContext)
    const navigate = useNavigate()

    function handleDeleteOrder(deleteOrder) {
        const updatedOrders = orders.filter((order) => order.id !== deleteOrder.id);
        setOrders(updatedOrders);
    }

    useEffect(() => {
        fetch('/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    

    const listOrders = orders.map(o => <Order key={o.id} order={o} handleDeleteOrder={handleDeleteOrder}/>)

    return(
        <div>
            <h2>My Orders</h2>
            {listOrders}
        </div>
    )
}

export default Orders;