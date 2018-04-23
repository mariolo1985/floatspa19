//import React from 'react';
//import { render } from 'react-dom';
//import Header from '../build/Header/Header';
//import { About, Book, Pricing } from '../build/Sections';

window.onload = function () {
    /* render(
         (
             <Header />
         ),
         document.getElementById('header-container')
     );
     */

    // fix me - to do - set up resize
    let map = document.getElementById('map');
    if (map != null) {
        const mediaLgMobileWidth = 730;
        const windowWidth = window.innerWidth;
        const contactWrapper = document.getElementsByClassName('contact-wrapper');
        const cWrapperHeight = contactWrapper[0].clientHeight;
        windowWidth <= mediaLgMobileWidth ? map.style.height = '450px' : map.style.height = cWrapperHeight + 'px';
    }

    // Check if scrollbar is below header
    shouldHeaderBeMini();
    // Scroll
    window.addEventListener('scroll', scrollThrottle, false);
    // mobile nav click
    let mobileNav = document.getElementById('mobile-nav');
    mobileNav.addEventListener('click', () => {
        let menuList = document.getElementById('menu-list');
        if (mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open');
            menuList.classList.remove('open')

        } else {
            mobileNav.classList.add('open')
            menuList.classList.add('open');
        }

    })



}

// Scroll
let scrollTimeout;
const waitTime = 50;

function scrollThrottle() {
    console.log('scroll');
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