import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/user";
import SupplementCheckbox from './SupplementCheckbox';

function OrderForm() {
    const navigate = useNavigate()
    const { loggedIn } = useContext(UserContext)

    const [supplement, setSupplement] = useState("")
    const [orderNumber, setOrderNumber] = useState("")
    const [quantity, setQuantity] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const [allSupplements, setAllSupplements] = useState([])
    // const [username, setUsername] = useState("")
    // const [price, setPrice] = useState("")


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
                orderNumber: orderNumber,
                // username: username,
                supplement_id: supplement,
                quantity: parseInt(quantity),
                // price: parseInt(price)
            })
        })
        .then(res => res.json())
        .then(s => {
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
                    <label>Order Number: </label>
                    <input 
                        type="number"
                        id="orderNumber"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                    /> <br/>
                    <h3>Choose Supplements: </h3>

                    {listSupplements}
                    <br />

                    <label>Quantity: </label>
                    <input 
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    /> <br/>
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