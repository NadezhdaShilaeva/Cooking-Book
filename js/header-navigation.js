let currentLink = location.pathname;
let currentPath = currentLink.substring(currentLink.lastIndexOf('/') + 1);

document.querySelectorAll('.menu-link').forEach(item => {
    let linkHref = item.getAttribute('href');
    if (currentPath === linkHref) {
        item.classList.add('active');
    }
});