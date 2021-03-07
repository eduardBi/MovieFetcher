import React from 'react';
import { Link } from 'react-router-dom';
import  "../scss/nav.scss";

const NavigationBar = () => {
    return (
      <nav className="nav-wrapper">
          <ul className='nav-list'>
            <li className='nav-list-item'> 
                <Link className='nav-list-link' to="/wishlist">wishlist</Link>
            </li>
            <li className='nav-list-item'> 
                <Link to="/" className='nav-list-link' >main</Link>
            </li>
          </ul>
      </nav>
    );
}

export default NavigationBar;
