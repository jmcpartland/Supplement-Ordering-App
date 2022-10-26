import React, {useState, useEffect} from 'react';


function SupplementCheckboxUpdate({supplement, order, handleCheckboxes}) {
    const [isChecked, setIsChecked] = useState(order.supplements.map(s => s.id).includes(supplement.id))

    // console.log(order.supplements.map(s => s.id == supplement.id))
    // console.log(supplement)
    
    // useEffect(() => {
    //     console.log(checked)
    // }, [checked])

    // const selectCheckbox = (e) => {
    //     setIsChecked(true);
    //     handleCheckboxes(e.target.value)
    // }
    
    return (
        <>
            <label>
            <b>{supplement.name}</b>
            <input
                type="checkbox"
                name="supplement"
                value={supplement.id}
                checked={isChecked}
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

export default SupplementCheckboxUpdate