import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';
import ComponetTable from './ComponetTbale';
import Fragment from './Fragment';
import React, { useState } from 'react';
import Parent from './Parent';
import Pc from './PureComponent';
import Memo from './UseMomo';
import InputRef from './RefClass';
import UseRefFun from './UseRef';
import Ls from './LocalStorage';


{/*

function App() {
  const User =[
    {id:5020,name:"Rinku", Email:"Rinku@gmail.com"},
    {id:5030,name:"pankaj", Email:"pankaj@gmail.com"},
    {id:5050,name:"Alok", Email:"alok@gmail.com"},
    {id:5060,name:"Keyur", Email:"Keyur@gmail.com"}
  ]
  return (
    <div>
      {
        User.map((items)=> <ComponetTable data={items}/>)

      }
      
    </div>
);
}

*/}

{/* function App()
{
  const data= "rinku";
    
  return(
  <React.Fragment>
  <Fragment name={data}/>
  </React.Fragment>  
  )
} */}
{/*


function App()
{
const [data,setData]= useState(" ")

 const updateData=()=>{
  setData("Rinku Nimaje");
}

  return(
    <React.Fragment>
          <Parent name={data} getData={updateData}/>
    </React.Fragment>

  )
    
}

*/}
{/*

function App ()
{
  return(
    <div>
    <Memo/>
    </div>
  )
}
*/}


{/*function App()
{
  return(
    <div>
    <InputRef/>
    <UseRefFun/>
    </div>
  )
}*/}
function App()
{
  return(
    <div>
    <Ls />
    </div>
  )
}
export default App;
