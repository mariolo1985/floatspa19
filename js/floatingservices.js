import React from 'react';
import { render } from 'react-dom';
import FloatingServices from '../build/Sections/floatingServices';

(() => {
    render(
        <FloatingServices />
        ,
        document.getElementById('services-benefits-container')
    );
})();