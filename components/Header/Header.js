import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import menuJson from '../../js/menu.json';

class Header extends Component {

    render() {
        return (
            <div className='header-wrapper'>

                <Menu menuList={menuJson} />
            </div>
        )
    }
}

export default Header;