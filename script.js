// Select menu bar and navbar elements
const menubar = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

// Toggle menu icon and navbar active state
menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Select all sections and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Handle scroll events
window.onscroll = () => {
    let scrollTop = window.scrollY;

    // Iterate through sections
    sections.forEach((sec) => {
        let offsetTop = sec.offsetTop - 150; // Adjust offset for visibility
        let sectionHeight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if the section is in view
        if (scrollTop > offsetTop && scrollTop < offsetTop + sectionHeight) {
            sec.classList.add('start-animation'); // Add animation class

            // Update active link state
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
        }
    });

    // Add sticky class to the header
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', scrollTop > 100);

    // Remove active states from the menu and navbar
    menubar.classList.remove('bx-x');
    navbar.classList.remove('active');
};
