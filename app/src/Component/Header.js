import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = ()=>{
    return (
        <header className='col12 sm4 md8 c2b flexCC'>
        <div className="col5 c7t"><Link to="/"><h3 className='c7t'>Logo</h3></Link></div>
        <div className="col7">
          <ul className='flex c7t nav'>
            <li className='col12'><NavLink to="/">Home</NavLink></li>
            <li className='col12'><NavLink to="/about">About</NavLink></li>
            <li className='col12'><NavLink to="/service">Service</NavLink></li>
            <li className='col12'><NavLink to="/profile">Profile</NavLink></li>
          </ul>
        </div>
    </header>
    )
}

export default Header;