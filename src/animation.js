export class animation {

    constructor() {
        this.cards = [];
        this.initialize();
    }


    initialize() {
        this.cards = [...document.querySelectorAll(".card-item")];
        this.removeUnopenedСards();
    }

    removeUnopenedСards() {
        this.cards.forEach((card, index) => {
            if (!card.classList.contains("open")) {
                let i = 99;
                setInterval(() => {
                    // for (let i = 99; i > 0; i--) {
                    card.style.opacity = "." + i;
                    // }
                    i -= 10;
                }, i*0.1)
            } else {
                // card.parentElement.style.justifyContent = "center";
            }
        })
    }

}