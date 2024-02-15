import logo from './logo.svg';
import './App.css';
import Dhome from './DynamicRouting/Dhome';
import Dabout from './DynamicRouting/Dabout';
import Dnavbar from './DynamicRouting/Dnavbar';
import Employee from './DynamicRouting/Employee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
   return (
      <div className='App'>
         <BrowserRouter>
         <Dnavbar/>
            <Routes>
               <Route path='/Dhome' element={<Dhome/>}/>
               <Route path='/Dabout' element={<Dabout/>}/>
               <Route path='/Employee' element={<Employee/>}/>
            </Routes>
         </BrowserRouter>
      </div>
   )
}
export default App