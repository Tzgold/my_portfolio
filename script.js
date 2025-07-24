// script.js
// Handle interactive behaviors once page content is loaded

document.addEventListener('DOMContentLoaded', () => {
    /* -----------------------------------------------------
       Dynamic navbar active link based on current section
    ----------------------------------------------------- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a');

    function activateNav() {
        let current = '';
        const scrollPos = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // offset for fixed header
            if (scrollPos >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}` || (current === '' && link.getAttribute('href') === '#')) {
                link.classList.add('active');
            }
        });
    }

    activateNav();
    window.addEventListener('scroll', activateNav);

    /* -----------------------------------------------------
       Any link with data-url opens that address
    ----------------------------------------------------- */
    document.querySelectorAll('a[data-url]').forEach(anchor => {
        anchor.addEventListener('click', evt => {
            evt.preventDefault();
            const url = anchor.dataset.url;
            if (url) {
                // For mailto: or tel: keep same tab; others new tab
                if (url.startsWith('mailto:') || url.startsWith('tel:')) {
                    window.location.href = url;
                } else {
                    window.open(url, '_blank');
                }
            }
        });
    });
}); 