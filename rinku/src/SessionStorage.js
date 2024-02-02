import  React,{ useState } from "react"
function SesStorage()
{
    const [value,setValue] = useState()
    function UpdateData()
    {
       sessionStorage.setItem('data','rinku');
    }
    return(
        <div>
        <h1>{value}</h1> 
        <button onClick={UpdateData}>Set value</button>
        </div>
    )
}
export default SesStorage;