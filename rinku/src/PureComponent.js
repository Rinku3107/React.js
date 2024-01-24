import React from "react";
class Pc extends React.PureComponent
{
    constructor()
    {
        super();
        this.state={count:1}
    }
    render()
    {
        console.log("Rendering");
        return(
            <div>
            <h1>Pure Component:-{this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count})}>click</button>
            </div>
        )

    }
        
}
export default Pc;