import React from 'react';

function MySupplement({ supplement, handleDeleteSupplement }) {

    return (
        <div>
                <hr />
                <h3>{supplement.name}</h3>
                <p>Manufacturer: {supplement.manufacturer}</p>
                <p>Serving Size: {supplement.serving_size}</p>
                <br />
        </div>
    )
}

export default MySupplement