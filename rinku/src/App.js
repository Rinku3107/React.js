import logo from './logo.svg';
import './App.css';
import Dhome from './DynamicRouting/Dhome';
import Dabout from './DynamicRouting/Dabout';
import Dnavbar from './DynamicRouting/Dnavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
   return (
      <div className='App'>
         <BrowserRouter>
         <Dnavbar/>
            <Routes>
               <Route path='/Dhome' element={<Dhome/>}/>
               <Route path='/Dabout' element={<Dabout/>}/>
            </Routes>
         </BrowserRouter>
      </div>
   )
}
export default App