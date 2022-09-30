import React, { useState, useContext } from "react"

const Order = ({order}) => {
    console.log(order)

    return(
        <div>
            <hr />
            <h3>Order Name: </h3><b>{order.name}</b>
            <p>Supplement: <b>{order.supplement.name}</b></p>
            <p>Order number: <b>{order.order_number}</b></p>
            <p>Quantity: <b>{order.quantity}</b></p>
        </div>
    )
}

export default Order;