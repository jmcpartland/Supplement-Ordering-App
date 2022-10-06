import React, {useState, useEffect} from 'react';


function SupplementCheckboxUpdate({supplement, order, handleCheckboxes}) {
    const [checked, setChecked] = useState(supplement.id === order.supplement_id)

    // useEffect(() => {
    //     console.log(checked)
    // }, [checked])

    const selectCheckbox = (e) => {
        setChecked(true);
        handleCheckboxes(e.target.value)
    }
    
    return (
        <>
            <label>
            <b>{supplement.name}</b>
            <input
                type="radio"
                name="supplement"
                value={supplement.id}
                checked={checked}
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