import { useState,useMemo } from "react";
function Memo()
{
    const[count,setCount]=useState(0);
    const[item,setItem]=useState(10);
   const momo = useMemo(
    function multicheck()
    {
        console.warn("Memo Check");
        return count*5
    },[count]

   ) 

    return(
        <div>
        <h1>Count:{count}</h1>
        <h1>Count:{item}</h1>
        <h3>multicheck Memo:-{momo}</h3>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
        <button onClick={()=>setItem(item*2)}>Update Count</button>
        </div>
    )
}
export default Memo;