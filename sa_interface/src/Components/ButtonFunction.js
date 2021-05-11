import React from 'react'
import Button from 'react-bootstrap/Button';
function ButtonFunction() {
    function number(){
        console.log("number function activated")
    }
    console.log("guess it wordks")
    return (
        <div>
            
            
            <Button type="submit" value="checkRating" class="btn">checkRating</Button>
        </div>
    )
}

export default ButtonFunction
