import React from 'react';

function SupplementCheckbox({supplement, handleCheckboxes}) {

    return (
        <>
            <hr />
            <label>
            <b>{supplement.name}</b>
            <input
                type="radio"
                name="supplement"
                value={supplement.id}
                // checked={}
                onChange={handleCheckboxes}
                />
            </label>
            <br />
            Manufacturer: {supplement.manufacturer}
        </>
    )
}

export default SupplementCheckbox