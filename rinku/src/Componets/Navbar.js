import React from 'react';
import {Link} from 'react-router-dom';
function Navbar()
{
    return(
        <div>
            <Link to="/Home">Home</Link> &nbsp;
            <Link to="/About">About</Link>

        </div>
    )
}
export default Navbar;