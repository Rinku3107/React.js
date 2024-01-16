 import React from "react";
function Table()
{
    const list = [
        {name:"Rinku", GR:"5020"},
        {name:"Alok", GR:"5037"},
        {name:"keyur", GR:"5067"},
        {name:"pankaj", GR:"5006"},
    ]

    return(
        <div>
            <table>
            {
                list.map((items)=>
                <tr>
                <td>{items.name}</td>
                <td>{items.GR}</td>
                </tr>
                )
            }
            </table>
        </div>
    )
}
export default Table;
