import React, { useState, useContext } from "react"

const Order = ({order}) => {


    return(
        <div>
                <h3>{order.order_number}</h3>
                <p>Quantity: {order.quantity}</p>
                <p>Supplement: {parseInt(order.supplement_id)}</p>
        </div>
    )
}

export default Order;