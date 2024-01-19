 import React from "react";
function Parent(props)
{
    const{name, getData}=props;
    return(
        <React.Fragment>
        <h1>Hello {props.name}</h1>
        <button onClick={getData}>click</button>
        </React.Fragment>
    )
}
export default Parent;