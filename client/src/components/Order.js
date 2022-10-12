import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import OrderUpdateForm from "./OrderUpdateForm"

function Order({order, handleDeleteOrder}) {
    const navigate = useNavigate()
    const [thisOrder, setThisOrder] = useState(order)


    const handleEditClick = (id) => {
        navigate('/order-update-form', {state: {id: order}})
    }


    const handleDeleteClick = () => {
        fetch(`orders/${order.id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then(() => handleDeleteOrder(order))
    }

    const listSupplements = order.supplements.map(s => <li>{s.name}</li>)

    return(
        <div>
            <hr />
            <h3>Order Name: </h3><b>{order.name}</b>
            {/* <p>Supplement: <b>{order.supplement.name}</b></p> */}
            <h3>Supplements:</h3>
            <ul>
                {listSupplements}
            </ul>
            <p>Order number: <b>{order.order_number}</b></p>
            <p>Quantity: <b>{order.quantity}</b></p>
            
            <button onClick={ handleEditClick }>Edit</button> | {' '}
            <button onClick={ handleDeleteClick }>Delete</button>
            
        </div>
    )
}

export default Order;