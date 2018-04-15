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


    // Scroll
    window.addEventListener('scroll', scrollThrottle, false);
    // Check if scrollbar is below header
    shouldHeaderBeMini();
}

// Scroll
let scrollTimeout;
const waitTime = 50;

function scrollThrottle() {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(function () {
            scrollTimeout = null;
            scrolled(this);
        }, waitTime);
    }
}


let prevScrollPos = 0;
const scrollThreshold = 155;
const scrollEventSpd = 50;

function scrolled(context) {

    let headerContainer = document.getElementById('header-container');
    let scrolledDown = true,
        vertScrollPos = context.pageYOffset;

    // CHECK IF SCROLLING UP OR DOWN
    if (vertScrollPos < prevScrollPos) {
        scrolledDown = false;
    }

    const isMiniSet = headerContainer.classList.contains('mini');
    if (scrolledDown) {
        // Scrolling down
        if ((vertScrollPos > scrollThreshold) && (!isMiniSet)) {
            headerContainer.classList.add('mini');
        }

    } else {
        // Scrolling up        
        if ((vertScrollPos < scrollThreshold) && (isMiniSet)) {
            headerContainer.classList.remove('mini');
        }

    }
    prevScrollPos = vertScrollPos;
}

function shouldHeaderBeMini() {
    const vertScrollPos = window.pageYOffset;
    if (vertScrollPos > scrollThreshold) {
        let headerContainer = document.getElementById('header-container');
        const isMiniSet = headerContainer.classList.contains('mini');
        if (!isMiniSet) {
            headerContainer.classList.add('mini');
        }
    }
}