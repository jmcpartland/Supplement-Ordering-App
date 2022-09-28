import React from 'react';

function SupplementCheckbox({supplement, handleCheckboxes}) {

    return (
        <div>
            <h3>{supplement.name}</h3>
            <p>Manufacturer: {supplement.manufacturer}</p>
            <p>Serving Size: {supplement.serving_size}</p>



        <label>
          All Supplements:
          <input
            name={supplement.name}
            type="checkbox"
            // checked={}
            onChange={handleCheckboxes}
            />
        </label>
        <br />




        </div>
    )
}

export default SupplementCheckbox