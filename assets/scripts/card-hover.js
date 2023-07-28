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