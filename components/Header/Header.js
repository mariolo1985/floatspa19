import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import menuJson from '../../js/menu.json';

class Header extends Component {

    render() {
        return (
            <div className='header-wrapper clear'>
                <div className='logo-container'>
                    <img className='header-logo' alt="Float Spa 19" src='./images/header_logo.png' />
                </div>
                <Menu menuList={menuJson} />                
            </div>
        )
    }
}

export default Header;