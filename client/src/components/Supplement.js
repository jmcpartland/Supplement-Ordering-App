import React from 'react';

function Supplement({ supplement, handleDeleteSupplement }) {

    const handleDeleteClick = () => {
        fetch(`supplements/${supplement.id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then(() => handleDeleteSupplement(supplement))
    }

    return (
        <div>
            <hr />
            <h3>{supplement.name}</h3>
            <p>Manufacturer: {supplement.manufacturer}</p>
            <p>Serving Size: {supplement.serving_size}</p>
            <button onClick={ handleDeleteClick }>Delete Supplement</button>
            <br />
        </div>
    )
}

export default Supplement