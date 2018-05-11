import React from 'react';
import { render } from 'react-dom';
import MassageServices from '../build/Sections/massageServices';

(() => {
    render(
        <MassageServices />
        ,
        document.getElementById('services-benefits-container')
    );
})();