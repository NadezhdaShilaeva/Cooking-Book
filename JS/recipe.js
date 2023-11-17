function changeImg(event) {
    let elem = event.target;
    let imgHeart = 'images/icons/heart.png';
    let imgHeartFull = 'images/icons/heart_full.png'
    if (elem.getAttribute('src') === imgHeart) {
        elem.setAttribute('src', imgHeartFull);
    } else {
        elem.setAttribute('src', imgHeart);
    }
}

document.querySelectorAll('.recipe__favourite .recipe-addition__icon').forEach(item => {
    item.addEventListener('click', changeImg);
});

function changeActiveCategory(event) {
    let elem = event.target;
    let activeClass = 'active';
    if (elem.classList.contains(activeClass)) {
        document.querySelectorAll('.catalog__link').forEach(item => {
            if (item.textContent.trim() === elem.textContent.trim()) {
                item.classList.remove(activeClass);
            }
        });
    } else {
        document.querySelectorAll('.catalog__link').forEach(item => {
            if (item.textContent.trim() === elem.textContent.trim()) {
                item.classList.add(activeClass);
            } else {
                item.classList.remove(activeClass);
            }
        });
    }
}

document.querySelectorAll('.catalog__link').forEach(item => {
    item.addEventListener('click', changeActiveCategory);
})
