export default class Cards {
    constructor() {
        this.cardSelector = '.cards__item';
    }

    handleDragStart(event) {
        let card = event.target;

        card.classList.add('cards__item_draggable');

        event.dataTransfer.dropEffect = 'copy';
        event.dataTransfer.setData('text/html', card);
        console.log(card);
    }

    handleDragEnd(event) {
        event.target.classList.remove('cards__item_draggable');
    }

    drugTracking() {
        let cards = document.querySelectorAll(this.cardSelector);

        Array.prototype.forEach.call(cards, (card, i) => {
            console.log(card)
            card.addEventListener('dragstart', this.handleDragStart, false);
            card.addEventListener('dragend', this.handleDragEnd, false);
        });
    }
}
