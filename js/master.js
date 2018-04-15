import React from 'react';
import { render } from 'react-dom';
import Header from '../build/Header/Header';
//import { About, Book, Pricing } from '../build/Sections';

window.onload = function () {
    render(
        (
            <Header />
        ),
        document.getElementById('header-container')
    );

    let map = document.getElementById('map');
    let contactWrapper = document.getElementsByClassName('contact-wrapper');
    const cWrapperHeight = contactWrapper[0].clientHeight;

    map.style.height = cWrapperHeight + 'px';
}