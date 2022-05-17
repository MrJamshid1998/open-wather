import React from 'react';
import PropTypes from 'prop-types';

const Nav = () => {
    return (
        <div className='nav'>
        <div className='logotip'>
            <div className='brend' >
                    <img src='logo512.png' width={50} height={50} className="logo" />
                </div>
                <div className='brend-name'>
                    <h3>Weather</h3>
            </div>
        </div>
            <div className='menu'>
                <ul className='nav-menu'>
                    <li className='nav-item'><a href='#' className='nav-link'>Home</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>About</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>Contact</a></li>
                </ul>
            </div>

        </div>
    );
};

Nav.propTypes = {};

export default Nav;