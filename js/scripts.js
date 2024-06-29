
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
setInterval(() => {
    // get time indicator elements
    let hours = document.getElementById("hrs");
    let minutes = document.getElementById("mins");
    let secondes = document.getElementById("secs");
    let ampm = document.getElementById("ampm");

    // digits time indicator
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    // dot time indicator
    let dotH = document.querySelector(".h_dot");
    let dotM = document.querySelector(".m_dot");
    let dotS = document.querySelector(".s_dot");

    // get current time
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? "PM" : "AM";

    // convert to 12 hour format
    if (h > 12) {
        h = h - 12;
    }

    // add 0 before single digit
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // set time and label
    if (h >= 8 && ap == "PM" || h <= 12 && ap == "AM") {
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        secondes.innerHTML = "00";
        ampm.innerHTML = "Closed";
    }
    else {
        hours.innerHTML = h;
        minutes.innerHTML = m;
        secondes.innerHTML = s;
        ampm.innerHTML = ap;
    }
    // set time circular indicator
    if (h >= 8 && ap == "PM" || h <= 12 && ap == "AM") {
        hh.style.strokeDashoffset = 0;
        mm.style.strokeDashoffset = 0;
        ss.style.strokeDashoffset = 0;
    } else {
        hh.style.strokeDashoffset = 440 - (440 * h) / 12;
        mm.style.strokeDashoffset = 440 - (440 * m) / 60;
        ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    }
    // set dot time position indicator
    if (h >= 8 && ap == "PM" || h <= 12 && ap == "AM") {
        dotH.style.transform = `rotate(${h * 0}deg)`;
        dotM.style.transform = `rotate(${m * 0}deg)`;
        dotS.style.transform = `rotate(${s * 0}deg)`;
    } else {
        dotH.style.transform = `rotate(${h * 30}deg)`;
        dotM.style.transform = `rotate(${m * 6}deg)`;
        dotS.style.transform = `rotate(${s * 6}deg)`;
    }
},);

