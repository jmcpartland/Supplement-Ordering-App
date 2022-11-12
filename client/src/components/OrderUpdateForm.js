import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/user";
import SupplementCheckboxUpdate from './SupplementCheckboxUpdate';
import {useLocation} from 'react-router-dom';

function OrderUpdateForm() {
    const navigate = useNavigate()
    const location = useLocation()
    const order = location.state.id

    const { loggedIn } = useContext(UserContext)
    const [orderName, setOrderName] = useState(order.name)
    const [supplements, setSupplements] = useState([])
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
        setSupplements(order.supplements.map(s => s.id))
    }, [])
    
    // console.log(order.id)

    const handleCheckboxes = (e) => {
        console.log(e.target)

        const { value, checked } = e.target
        if (checked) {
            setSupplements([...supplements, value])
        }
        else {
            setSupplements(supplements.filter((num) => num != value))
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
                quantity: parseInt(quantity),
                supplements: supplements,
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

    if (loggedIn) {
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
    } else {
        return (
            <div>
                <h3>You need to be logged in to see the Order form</h3>
            </div>
        )
    }
}

export default OrderUpdateForm