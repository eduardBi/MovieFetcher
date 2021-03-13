import React from 'react';
import { Link } from 'react-router-dom';
import  "../scss/nav.scss";

const NavigationBar = () => {
    return (
      <nav className="nav-wrapper">
          <ul className='nav-list'>
            <li className='nav-list-item'> 
                <Link className='' to="/"><img className='logo' src={require('../logo.png').default} alt=""/></Link>
            </li>
            <li className='nav-list-item'> 
                <Link to="/" className='nav-list-link' >MAN</Link>
            </li>
            <li className='nav-list-item'> 
                <Link to="/" className='nav-list-link' >man</Link>
            </li>
          </ul>
      </nav>
    );
}

export default NavigationBar;
