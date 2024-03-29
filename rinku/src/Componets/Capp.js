import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from  'react-router-dom';
import Home from './Componets/Home';
import About from './Componets/About';
import Navbar from './Componets/Navbar'
function App() {
 return(
    <div className='App'>
        <BrowserRouter>
        <h1>BrowserRouter</h1>
        <br/>
        <hr></hr>
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
export default App