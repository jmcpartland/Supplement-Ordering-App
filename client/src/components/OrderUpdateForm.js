import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/user";
import SupplementCheckboxUpdate from './SupplementCheckboxUpdate';
import {useLocation} from 'react-router-dom';

function OrderUpdateForm() {
    const navigate = useNavigate()
    const location = useLocation()
    const order = location.state.id

    // const { loggedIn } = useContext(UserContext)
    const [orderName, setOrderName] = useState(order.name)
    const [supplements, setSupplements] = useState(order.supplement_id)
    const [orderNumber, setOrderNumber] = useState(order.order_number)
    const [quantity, setQuantity] = useState(order.quantity)
    // const [errorsList, setErrorsList] = useState([])
    const [allSupplements, setAllSupplements] = useState([])

    useEffect(() => {
        fetch('/supplements')
        .then(res => res.json())
        .then(data => {
            setAllSupplements(data)
        })
    }, [])
    
    const handleCheckboxes = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setSupplements([...supplements, value])
        }
        else {
            setSupplements(supplements.filter((e) => e !== value))
        }
    }

    const listSupplements = allSupplements.map(s => <SupplementCheckboxUpdate key={s.id} supplement={s} order={order} handleCheckboxes={handleCheckboxes} />)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/orders/${order.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                order_number: parseInt(orderNumber),
                name: orderName,
                supplements: supplements,
                quantity: parseInt(quantity),
                // price: parseInt(price)
            })
        })
        .then(res => res.json())
        .then(s => {
            setOrderName("")
            setOrderNumber("")
            setSupplements([])
            setQuantity("")
            navigate('/orders')
        })
    }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Order Name: </h2>
                    <input 
                        type="text"
                        id="orderName"
                        value={orderName}
                        onChange={(e) => setOrderName(e.target.value)}
                    /> 
                    <hr />
                    <h3>Choose Supplements: </h3>
                    {listSupplements}
                    <hr />
                    <label>Order Number: </label>
                    <input 
                        type="number"
                        id="orderNumber"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                    /> 
                    <br/>
                    <hr/>
                    <label>Quantity: </label>
                    <input 
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    /> <br/>
                    <hr/>
                    <input type="submit" value="Update Order"/>
                    <br />
                </form>
            </div>
        )
}

export default OrderUpdateForm