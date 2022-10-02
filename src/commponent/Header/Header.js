import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
         
          <nav className='header' >
            <img src={logo} alt="" />
            <div>
            <a href="/shop">Shop</a>
            <a href="/review">Review Order</a>
            <a href="/manage">Manage Inventory</a>
            <a href="/about">About Me</a>
            </div>
          </nav>
    );
};

export default Header;