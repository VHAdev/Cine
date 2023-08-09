function handleMouseEnter() {
    this.classList.add('card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove('card--hovered');
    document.body.id ='';
}

function addEventListenersToCards() {
    const cardElemets = document.getElementsByClassName('card');

    for (let index = 0; index < cardElemets.length; index++) {
        const card = cardElemets[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }

}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.cards-carousel')
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);  
    const rotateYDeg = -120 *(Number(selectedItem) - 1); /* -1 para ''existir'' o 0 */
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`); /* replace = substitui um ''pedaço'' de texto pelo argumento */
    
    carousel.style.transform = newTransform;

/*  
    bug alienigena misterioso todos os cards ficaram com id '1'

    const activeButtonElement = document.querySelector('.controller__button--active');
    activeButtonElement.classList.remove('.controller__button--active');
    selectedButtonElement.classList.add('.controller__button--active'); */
    
}