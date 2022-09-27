import React from 'react';

function Supplement({supplement}) {

    return (
        <div>
                <h3>{supplement.name}</h3>
                <p>Manufacturer: {supplement.manufacturer}</p>
                <p>Serving Size: {supplement.serving_size}</p>
        </div>
    )
}

export default Supplement