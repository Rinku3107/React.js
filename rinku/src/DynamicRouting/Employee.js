import { Link } from "react-router-dom";

function Employee()
{
    return(
        <div>
        <h1>Employee Page</h1>
        <ul>
        <li><Link to='/Employee/one'> Employee 1</Link></li>
        <li><Link to='/Employee/two'> Employee 1</Link></li>
        </ul>
        </div>
    )
}
export default Employee;