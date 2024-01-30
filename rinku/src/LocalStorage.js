import { Fragment, useRef } from "react";

function Ls()
{
    const Data=useRef();
    const LocalStorage=()=>
    {
        console.log(Data.current.value);
        localStorage.setItem("rinku",Data.current.value);
    }
    console.log(localStorage.getItem("rinku"),"****")

    return(
        <Fragment>
        <h1>LocalStorage</h1>
            <input type="text" ref={Data}></input>
            <button onClick={LocalStorage}>Click</button>
        </Fragment>
    )
}
export default Ls;