import Dhome from "./Dhome";
import Dabout from "./Dabout";
import Employee from "./Employee";
import { Link } from "react-router-dom";
function Dnavbar()
{
    return(
        <div>
        <h1>Navbar</h1>
        <Link to="/Dhome">Home</Link> &nbsp; &nbsp;
        <Link to="/Dabout">About</Link> &nbsp; &nbsp;
        <Link to="/Employee">Employee</Link> &nbsp; &nbsp;
        </div>
    )
}
export default Dnavbar;