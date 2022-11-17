import React from "react"
import { useNavigate } from "react-router-dom"

function Order({order, handleDeleteOrder}) {
    const navigate = useNavigate()

    const handleEditClick = (id) => {
        navigate(`${order.id}`, {state: {id: order}})
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
            <h3>Supplements:</h3>
            <p>
                {listSupplements}
            </p>
            <p>Order number: <b>{order.order_number}</b></p>
            <p>Quantity: <b>{order.quantity}</b></p>
            
            <button onClick={ handleEditClick }>Edit</button> | {' '}
            <button onClick={ handleDeleteClick }>Delete</button>
            
        </div>
    )
}

export default Order;