import React, { Component } from 'react';
import MenuItem from '../Menu/MenuItem';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='menu-container'>
                <ul className='menu-list clear'>
                    {
                        this.props.menuList ? this.props.menuList.menu.map((item, key) => {
                            return (
                                <MenuItem key={key} name={item.name} section={item.section} />
                            )
                        })
                            : null
                    }
                    <li className='menu-item'>
                        <button className='btn btn-book'>Book Now</button>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Menu;