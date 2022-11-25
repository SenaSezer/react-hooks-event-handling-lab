import React from 'react'

function Keypad (){
    function handleChange(event) {
        console.log("Entering password...");
      }
    return (
        <div> <input type="password"  onChange={event => handleChange(event)} />


        </div>
    )
}

export default Keypad;