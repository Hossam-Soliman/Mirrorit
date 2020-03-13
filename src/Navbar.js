import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {

    return(
        <div className="Navbar">  
            <h3>M I R R O R I T . M E</h3>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="news">News</Link></li>
            </ul>
            
        </div>
    )
}

export default Navbar