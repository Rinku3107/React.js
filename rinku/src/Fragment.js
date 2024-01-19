import React from "react";
function Fragment(props)
{
    function getdata(e)
    {
        e.preventDefault();
        const myData=props.name;
        document.getElementById("fg").innerText=myData;
        
    }
    return(
        <React.Fragment>
        <h1>Hello<span id="fg"></span></h1>
        <button onClick={getdata}>Click</button>
        </React.Fragment>
    )
}
export default Fragment;