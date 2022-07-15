import React from "react";


const Slotm=(props)=>{


   let x =props.x;
   let y =props.y;
   let z =props.z;

    if((x===y)&(y===z)){
        return(
            <>
            <h1>{x}{y}{z}</h1>
            <h1>all are correct</h1>
            <hr></hr>
            </>

        )
    } else {
        return (
            <>
            <h1>{x}{y}{z}</h1>

            <h1>this is not proper way</h1>
            </>
        )
    }



}

export default Slotm