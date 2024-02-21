const ingredientsButton = document.querySelector('.ingredients-form__button');
const ingredientsForm = document.getElementsByClassName('addition-form__column')[1];
const ingredientsTemplate = document.getElementById('ingredients').content;
const ingredientNameInput = form.ingredientname;
const ingredientQuantityInput = form.ingredientquantity;
const ingredientMesInput = form.ingredientmes;

ingredientsButton.addEventListener('click', addNewIngredient);

function addNewIngredient() {
    if (!ingredientNameInput.value || !ingredientQuantityInput.value || !ingredientMesInput.value) {
        alert('Введите параметры ингредиента!');
        return;
    }

    addIngredient(ingredientNameInput.value, ingredientQuantityInput.value, mapMeasurement(ingredientMesInput.value));    

    resetIngredientParams();
}

export function addIngredient(ingredientName, ingredientQuantity, ingredientMes) {
    let newIngredient = createIngredient(ingredientName, ingredientQuantity, ingredientMes);
    let ingredientList = document.querySelector('.ingredients__list');

    if (ingredientList === null) {
        let ingredientsTemplate1 = ingredientsTemplate.cloneNode(true);
        ingredientsTemplate1.querySelector('.ingredients__list').appendChild(newIngredient);
        ingredientsForm.appendChild(ingredientsTemplate1);
    } else {
        ingredientList.appendChild(newIngredient);
    }
}

function createIngredient(ingredientNameText, ingredientQuantityText, ingredientMesRu) {
    let ingredientName = document.createElement('p');
    ingredientName.classList.add('ingredient__name');
    let valueName = ingredientNameText.charAt(0).toUpperCase() 
                    + ingredientNameText.slice(1).toLowerCase();
    ingredientName.textContent = valueName;

    let ingredientQuantity = document.createElement('p');
    ingredientQuantity.classList.add('ingredient__quantity');
    let valueQuantity = ingredientQuantityText;
    ingredientQuantity.textContent = `${valueQuantity} ${ingredientMesRu}`;

    let newIngredient = document.createElement('li');
    newIngredient.classList.add('ingredient__row', 'ingredient__row__removable');
    newIngredient.appendChild(ingredientName);
    newIngredient.appendChild(ingredientQuantity);
    newIngredient.addEventListener('click', removeIngredient);

    return newIngredient;
}

function mapMeasurement(measurement) {
    switch (measurement) {
        case 'g': return 'г';
        case 'kg': return 'кг';
        case 'l': return 'л';
        case 'ml': return 'мл';
        case 'teas': return 'ч. л.';
        case 'tables': return 'ст. л.';
        case 'piece': return 'шт';
        case 'glass': return 'стак.';
        default: return 'not defined';
    }
}

function resetIngredientParams() {
    ingredientNameInput.value = '';
    ingredientQuantityInput.value = '';
    ingredientMesInput.forEach(element => {
        element.checked = false;
    });
    
    let selectMesTitle = ingredientsForm.querySelector('.select__title');    
    selectMesTitle.textContent = 'Ед.изм.';
    selectMesTitle.style.color = '#808080';
}

function removeIngredient(event) {
    let ingredintList = event.target.parentNode;
    ingredintList.removeChild(event.target);

    if (ingredintList.childElementCount === 0) {
        let ingredientsWrapper = ingredintList.parentNode;
        ingredientsWrapper.parentNode.removeChild(ingredientsWrapper);
    }
}

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    document.querySelector('.addition-form__ingredients-preview').remove();
});