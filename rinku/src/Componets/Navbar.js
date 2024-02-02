import Home from "./Home";
import About from "./About";
import {Link} from 'react-router-dom';
function Navbar()
{
    return(
        <div>
        <ul>
        <h1>Index page</h1>
        <li><Link to="Home">Home</Link></li>
        <li><Link to="About">About</Link></li>
        </ul>
        </div>
    )
}
export default Navbar;