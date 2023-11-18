const select = document.querySelector('.parameter__select');
const selectBox = select.parentNode;
const selectTitle = select.querySelector('.select__title');
const selectOptions = select.querySelectorAll('.parameter__option');

select.addEventListener('click', changeState);

function changeState() {
    if ('active' === select.dataset.state) {
      select.setAttribute('data-state', '');
      selectBox.setAttribute('data-state', '');
    } else {
      select.setAttribute('data-state', 'active');
      selectBox.setAttribute('data-state', 'active');
    }
    
}

for (let i = 0; i < selectOptions.length; i++) {
  selectOptions[i].addEventListener('click', changeOption);
}

function changeOption(event) {
    event.stopPropagation();
    if (event.target.matches('label')) {
        selectTitle.textContent = event.target.textContent.trim();
        selectTitle.style.color = '#3F612A';
        select.setAttribute('data-state', '');
        selectBox.setAttribute('data-state', '');
    }
}

document.addEventListener('click', (event) => {
    if (event.target !== select) {
        select.setAttribute('data-state', '');
        selectBox.setAttribute('data-state', '');
    }
});

/* Reset title
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  selectTitle.textContent = selectTitle.getAttribute('data-default');
});*/