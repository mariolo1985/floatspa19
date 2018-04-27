import React from 'react';
import { render } from 'react-dom';
import FloatingServices from '../build/Sections/floatingServices';

window.onload = () => {
    render(
        <FloatingServices />
        ,
        document.getElementById('services-benefits-container')
    );
}