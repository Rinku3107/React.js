import Dhome from "./Dhome";
import Dabout from "./Dabout";
import { Link } from "react-router-dom";
function Dnavbar()
{
    return(
        <div>
        <h1>Navbar</h1>
        <Link to="/Dhome">Home</Link>
        <Link to="/Dabout">About</Link>
        </div>
    )
}
export default Dnavbar;