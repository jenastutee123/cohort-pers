import React from "react";

const Child = React.memo(({onClick})=>{
    console.log("Child Rerendered");
   return(
     <div>
        <p>I am the child component</p>
        <button onClick={onClick}>Click from child</button>
     </div>
   )
});

export default Child;
