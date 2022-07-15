import React from "react";
import Slotm from './Slotm'

const App=()=>{
  return(
    <>
    <div className="main">
<h1>this is the heading of the webpage</h1>
<Slotm
x ='🐘' y='🐶' z='🐈'
/>
<Slotm
x ='🐘' y='🐘' z='🐘'
/>
<Slotm
x ='🐘' y='🐶' z='🐈'
/>



    </div>
    </>
  )
}
export default App