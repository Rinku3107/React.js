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