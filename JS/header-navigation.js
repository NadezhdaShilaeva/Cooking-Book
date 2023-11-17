let currentLink = location.pathname;

document.querySelectorAll('.menu-link').forEach(item => {
    let linkHref = item.getAttribute('href');
    if (currentLink === linkHref) {
        item.classList.add('active');
    }
});