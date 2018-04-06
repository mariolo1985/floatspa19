import React from 'react';
import { render } from 'react-dom';
import Header from '../build/Header/Header';
import { About, Book, Pricing } from '../build/Sections';

window.onload = function () {
    render(
        (
            <Header />
        ),
        document.getElementById('header-container')
    );

    render(
        (
            <About />
        ),
        document.getElementById('section-about-container')
    );

    render(
        (
            <Book />
        ),
        document.getElementById('section-book-container')
    );

    render(
        (
            <Pricing />
        ),
        document.getElementById('section-pricing-container')
    );


}