// Get the necessary elements
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

// Function to toggle the visibility of the navigation links
function toggleMenu() {
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
}

// Add event listener to the menu icon for toggling the menu
menuIcon.addEventListener('click', toggleMenu);

// Function to close the navigation menu when a link is clicked
function closeMenu() {
    navLinks.style.display = 'none';
}

// Get all navigation links
const navLinksList = document.querySelectorAll('.nav-links a');

// Add event listener to each navigation link to close the menu when clicked
navLinksList.forEach(link => {
    link.addEventListener('click', closeMenu);
});
