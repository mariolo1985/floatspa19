import React, { Component } from 'react';

class MenuItem extends Component {
    constructor(props) {
        super(props);

    }

    menuItemClick = section => {
        const sections = document.getElementsByClassName(String(section));
        sections.length > 0 ? window.scroll({
            top: (sections[0].offsetTop + 60),
            behavior: "smooth"
        }) : null;
        // fix-me : Internet explorer fix

    }

    render() {

        const { name, section } = this.props;
        return (
            <li className='menu-item' onClick={() => this.menuItemClick(section)}>
                <div className='menu-goto-section'>{name}</div>
                <div className='menu-hover-id'></div>
            </li>
        )
    }
}
export default MenuItem;