import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

function SupplementForm() {

    const [name, setName] = useState("")
    const [manufacturer, setManufacturer] = useState("")
    const [servingSize, setServingSize] = useState(0)
    const [errorsList, setErrorsList] = useState([])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/supplements', { // configuration object
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                manufacturer: manufacturer,
                serving_size: parseInt(servingSize)
            })
        })
        .then(res => res.json())
        .then(s => {
            if(!s.errors) {
                setName("")
                setManufacturer("")
                setServingSize("")
                navigate('/supplements')
            } else {
                const errorLis = s.errors.map(e => <li>{e}</li>)
                setErrorsList(errorLis)
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /> <br/>
                <label>Manufacturer:</label>
                <input 
                    type="text"
                    id="manufacturer"
                    value={manufacturer}
                    onChange={(e) => setManufacturer(e.target.value)}
                /> <br/>
                <label>Serving Size:</label>
                <input 
                    type="number"
                    id="servingSize"
                    value={servingSize}
                    onChange={(e) => setServingSize(e.target.value)}
                /> <br/>
                <input type="submit" />
            </form>
            <ul>
                <h3>{errorsList}</h3>
            </ul>
        </div>
    )
}

export default SupplementForm