import React from 'react';

function SupplementCheckbox({supplement, handleCheckboxes}) {

    return (
        <>
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
            <br />
            <br />
        </>
    )
}

export default SupplementCheckbox