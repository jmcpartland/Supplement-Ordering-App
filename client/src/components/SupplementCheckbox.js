import React, {useState} from 'react';


function SupplementCheckbox({supplement, handleCheckboxes}) {

    return (
        <>
            <label>
            <b>{supplement.name}</b>
            <input
                type="checkbox"
                name="supplement"
                value={supplement.id}
                // checked={checked}
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