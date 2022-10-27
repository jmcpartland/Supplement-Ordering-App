import React, {useState, useEffect} from 'react';


function SupplementCheckboxUpdate({supplement, order, handleCheckboxes}) {
    const checkTrueFalse = order.supplements.map(s => s.id).includes(supplement.id)
    const [isChecked, setIsChecked] = useState(checkTrueFalse)

    const selectCheckbox = (e) => {
        e.target.checked = !isChecked
        setIsChecked(!isChecked);
        handleCheckboxes(e)
        
        console.log(isChecked)
    }
    
    console.log(isChecked)
    

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