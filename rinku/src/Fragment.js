import React from "react";
function Fragment(props)
{
    function getdata(e)
    {
        e.preventDefault();
        const myData=props.name;
        
        
    }
    return(
        <React.Fragment>
        <h1>Hello{myData}</h1>
        <button onClick={getdata}>Click</button>
        </React.Fragment>
    )
}
export default Fragment;