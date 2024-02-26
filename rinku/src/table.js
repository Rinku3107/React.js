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