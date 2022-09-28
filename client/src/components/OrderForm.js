import React, { useState, useEffect } from 'react';
import SupplementCheckbox from './SupplementCheckbox';

function OrderForm() {

    const [supplement, setSupplement] = useState("")
    const [username, setUsername] = useState("")
    const [orderNumber, setOrderNumber] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const [allSupplements, setAllSupplements] = useState([])


    useEffect(() => {
        fetch('/supplements')
        .then(res => res.json())
        .then(data => setAllSupplements(data))
    }, [])

    const handleCheckboxes = (e) => {
        console.log(e)
    }

    const listSupplements = allSupplements.map(s => < SupplementCheckbox key={s.id} supplement={s} handleCheckboxes={handleCheckboxes} />)


    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/orders', { // configuration object
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                orderNumber: orderNumber,
                username: username,
                supplement: supplement,
                quantity: parseInt(quantity),
                price: parseInt(price)
            })
        })
        .then(res => res.json())
        .then(s => {
            setOrderNumber("")
            setUsername("")
            setSupplement("")
            setQuantity("")
            setPrice("")
        })
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Order Number:</label>
                <input 
                    type="number"
                    id="orderNumber"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                /> <br/>
                <label>Supplement:</label>

                {listSupplements}

                <input 
                    type="text"
                    id="supplement"
                    value={supplement}
                    onChange={(e) => setSupplement(e.target.value)}
                /> <br/>
                <label>Quantity:</label>
                <input 
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                /> <br/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default OrderForm