import React, { Component } from 'react';

class MenuItem extends Component {
    constructor(props) {
        super(props);

    }

    menuItemClick = section => {
        const sections = document.getElementsByClassName(String(section));
    }

    render() {

        const { name, section } = this.props;
        return (
            <li className='menu-item' onClick={() => this.menuItemClick(section)}>
                <div className='menu-goto-section'>{name}</div>
            </li>
        )
    }
}
export default MenuItem;