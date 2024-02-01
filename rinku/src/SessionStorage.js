import  React,{ useState } from "react"

const[value,setValue]=useState()
function SesStorage()
{
    function UpdateData()
    {
       sessionStorage.setItem("data","rinku");
    }
    return(
        <div>
        <input type="text" value={value}></input>
        <button onClick={UpdateData}>Click</button>
        </div>
    )
}
export default SesStorage;