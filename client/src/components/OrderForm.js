import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/user";
import SupplementCheckbox from './SupplementCheckbox';

function OrderForm() {
    const navigate = useNavigate()

    const { loggedIn } = useContext(UserContext)
    const [orderName, setOrderName] = useState("")
    const [supplements, setSupplements] = useState([])
    const [orderNumber, setOrderNumber] = useState("")
    const [quantity, setQuantity] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const [allSupplements, setAllSupplements] = useState([])

    useEffect(() => {
        fetch('/all-supplements')
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

    const listSupplements = allSupplements.map((s) => <SupplementCheckbox key={s.id} supplement={s} handleCheckboxes={handleCheckboxes} />)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        fetch('/orders', {
            method: 'POST',
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
            if (!s.errors) {
                setOrderName("")
                setOrderNumber("")
                setSupplements([])
                setQuantity("")
                navigate('/orders')
            } else {
                const errorLis = s.errors.map(e => <li>{e}</li>)
                setErrorsList(errorLis) 
            }
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
                <ul>
                    <h3>{errorsList}</h3>
                </ul>
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