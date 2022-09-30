import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/user";
import SupplementCheckbox from './SupplementCheckbox';

function OrderForm() {
    const navigate = useNavigate()

    const { loggedIn } = useContext(UserContext)
    const [orderName, setOrderName] = useState("")
    const [supplement, setSupplement] = useState("")
    const [orderNumber, setOrderNumber] = useState("")
    const [quantity, setQuantity] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const [allSupplements, setAllSupplements] = useState([])

    useEffect(() => {
        fetch('/supplements')
        .then(res => res.json())
        .then(data => {
            setAllSupplements(data)
            // console.log(data)
        })
    }, [])
    
    const handleCheckboxes = (e) => {
        setSupplement(e.target.value)
        console.log(e.target.value)
    }

    const listSupplements = allSupplements.map(s => <SupplementCheckbox key={s.id} supplement={s} handleCheckboxes={handleCheckboxes} />)

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/orders', { // configuration object
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                order_number: parseInt(orderNumber),
                name: orderName,
                supplement_id: supplement,
                quantity: parseInt(quantity),
                // price: parseInt(price)
            })
        })
        .then(res => res.json())
        .then(s => {
            setOrderName("")
            setOrderNumber("")
            setSupplement("")
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
                    <input type="submit" />
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

export default OrderForm