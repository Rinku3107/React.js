import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from  'react-router-dom'
import Home from './Componets/Home';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route path='Home' element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App;