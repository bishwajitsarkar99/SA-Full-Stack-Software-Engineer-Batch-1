document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    // Define the SVG paths for open (hamburger) and close icons
    const hamburgerPath = 'M4 6h16M4 12h16M4 18h16';
    const closePath = 'M6 18L18 6M6 6l12 12';

    // Mobile menu toggle
    if (menuToggle && mobileMenu && menuIcon) {
        menuToggle.addEventListener('click', () => {
            // Toggle the 'active' class to control the slide-down animation via max-height
            mobileMenu.classList.toggle('active');

            // Toggle the menu icon appearance
            if (mobileMenu.classList.contains('active')) {
                // Menu is open (show close icon)
                menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="${closePath}" />`;
            } else {
                // Menu is closed (show hamburger icon)
                menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="${hamburgerPath}" />`;
            }
        });

        // Optional: Close menu if a link inside is clicked (good UX)
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                // Don't close if clicking on category items
                if (!link.closest('.category-dropdown-mobile')) {
                    mobileMenu.classList.remove('active');
                    menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="${hamburgerPath}" />`;
                }
            });
        });
    }

    // Mobile category dropdown toggle
    const mobileCategoryToggle = document.getElementById('mobile-category-toggle');
    const mobileCategorySubmenu = document.getElementById('mobile-category-submenu');
    const mobileCategoryArrow = document.getElementById('mobile-category-arrow');

    if (mobileCategoryToggle && mobileCategorySubmenu && mobileCategoryArrow) {
        mobileCategoryToggle.addEventListener('click', () => {
            // Toggle submenu visibility
            mobileCategorySubmenu.classList.toggle('hidden');
            
            // Rotate arrow icon
            if (mobileCategorySubmenu.classList.contains('hidden')) {
                mobileCategoryArrow.style.transform = 'rotate(0deg)';
            } else {
                mobileCategoryArrow.style.transform = 'rotate(180deg)';
            }
        });

        // Close menu when clicking on category submenu items
        mobileCategorySubmenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="${hamburgerPath}" />`;
                mobileCategorySubmenu.classList.add('hidden');
                mobileCategoryArrow.style.transform = 'rotate(0deg)';
            });
        });
    }
});