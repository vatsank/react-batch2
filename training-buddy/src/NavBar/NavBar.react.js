import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {

    return (
        <nav>

        <ul>
            <li><Link exact to="/">Training</Link></li>
            <li><Link to='/admin'>Administration</Link></li>
        </ul>
        </nav>
    );

}

export default NavBar;