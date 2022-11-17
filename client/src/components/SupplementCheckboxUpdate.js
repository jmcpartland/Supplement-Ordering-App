import React, { useState } from 'react';

function SupplementCheckboxUpdate({supplement, order, handleCheckboxes}) {
    const checkTrueFalse = order.supplements.map(s => s.id).includes(supplement.id)
    const [isChecked, setIsChecked] = useState(checkTrueFalse)
    const selectCheckbox = (e) => {
        e.target.checked = !isChecked
        setIsChecked(!isChecked);
        handleCheckboxes(e)
    }    

    return (
        <>
            <label>
            <b>{supplement.name}</b>
            <input
                type="checkbox"
                name="supplement"
                value={supplement.id}
                checked={isChecked}
                onChange={selectCheckbox}
                />
            </label>
            <br />
            Manufacturer: {supplement.manufacturer}
            <br />
            <br />
        </>
    )
}

export default SupplementCheckboxUpdate