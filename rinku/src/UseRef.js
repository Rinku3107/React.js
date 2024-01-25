import React, { useRef } from "react";
function UseRefFun()
{
    let name=useRef(null);
    function getValue()
    {
        console.warn("UseRef Calling");
        name.current.value="Rinku";
        name.current.style.color="red";
        name.current.style.backgroundColor="green";
    }
    return(
        
            <div>
            <h1>UseRef In Function</h1>s
            <input type="text" ref={name}></input>
            <button onClick={getValue}>Click</button>
            </div>
    )
}
export default UseRefFun;