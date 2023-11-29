document.querySelector('.advices__button').addEventListener('click', loadAdvices);

async function loadAdvices() {
    document.querySelector('.advices').setAttribute('data-state', 'load');

    try {
        let id = Math.floor(Math.random() * 4990);
        let jsonAdvices = [];
        for (let i = 0; i < 5; i++) {
            await fetch(`https://jsonplaceholder.typicode.com/photos/${id + i}`)
                .then(response => response.json())
                .then(json => jsonAdvices.push(json));
        }

        document.querySelector('.advices').setAttribute('data-state', '');
        drawAdvices(jsonAdvices);
    } catch (error) {
        handleError(error);
    }
}

function drawAdvices(jsonAdvices) {
    let advicesContainer = document.querySelector('.advices__list');
    let adviceTemplate = document.querySelector('template#advice').content;
    
    jsonAdvices.forEach(advice => {
        let newAdvice = adviceTemplate.cloneNode(true);
        newAdvice.querySelector('img').setAttribute('src', advice.url);
        newAdvice.querySelector('.advice__text').textContent = advice.title;
        advicesContainer.appendChild(newAdvice);
    });
}

function handleError(error) {
    console.error("Ошибка: ", error);
    document.querySelector('.advices').setAttribute('data-state', 'error');
}