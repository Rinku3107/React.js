import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from  'react-router-dom';
import Home from './Componets/Home';
import About from './Componets/About';
import Navbar from './Componets/Navbar';
function App() {
  return (
    <div className='App'>
        <BrowserRouter>

        <h1>BrowserRouter</h1>
        <br/>
          <Navbar />
          <br/>
            <Routes>
              <Route path='/Home' element={<Home/>}></Route> 
              <Route path='/About' element={<About/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App;