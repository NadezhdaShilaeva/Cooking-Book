let currentLink = location.pathname.substring(1);

document.querySelectorAll('.menu-link').forEach(item => {
    let linkHref = item.getAttribute('href');
    if (currentLink === linkHref) {
        item.classList.add('active');
    }
});