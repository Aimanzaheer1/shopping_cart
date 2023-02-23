import { useState } from "react";


const Quantity = ({
    onchange

}) => {
    const [value , setvalue]= useState(1);

    const handleChange = (i) => {
        setvalue(i.target.value)
        onchange(i.targit.value)

    }
    return(
        <div>Quantity:<input  type='number' value={value} min={0} onChange={handleChange}></input></div>
    )
}
export default Quantity;