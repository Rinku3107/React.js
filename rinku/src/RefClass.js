import React,{createRef} from "react";
class InputRef extends React.Component
{
    constructor(){
        super();
        this.RnRef=createRef();
    }
    getValue() {
        console.warn("function calling");
        this.RnRef.current.value="Rinku";
        this.RnRef.current.style.color="Red";
        this.RnRef.current.style.backgroundColor="Green";
    }
    render()
    {
        return(
            <div>
            <h1>Create Ref</h1>
            <input type="text" ref={this.RnRef}></input>
            <button onClick={()=>this.getValue()}>Click</button>
            </div>
        )
    }
}
{/* crete Ref no use Class ma karay */}
export default InputRef;