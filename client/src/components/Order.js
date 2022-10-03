import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

const Order = ({order, handleDeleteOrder}) => {
    const navigate = useNavigate()
    const [thisOrder, setThisOrder] = useState(order)

    const handleEdit = (e) => {
        console.log(e)
    }

    const handleDeleteClick = () => {
        fetch(`orders/${order.id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then(() => handleDeleteOrder(order))
    }

    return(
        <div>
            <hr />
            <h3>Order Name: </h3><b>{order.name}</b>
            <p>Supplement: <b>{order.supplement.name}</b></p>
            <p>Order number: <b>{order.order_number}</b></p>
            <p>Quantity: <b>{order.quantity}</b></p>
            
            <button onClick={ handleEdit }>Edit</button> | {' '}
            <button onClick={ handleDeleteClick }>Delete</button>
            
        </div>
    )
}

export default Order;