document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [

        {
            name: 'pony1',
            img: 'img/pony1.png'
        },
        {
            name: 'pony1',
            img: 'img/pony1.png'
        },
        {
            name: 'pony2',
            img: 'img/pony2.png'
        },
        {
            name: 'pony2',
            img: 'img/pony2.png'
        },
        {
            name: 'pony3',
            img: 'img/pony3.png'
        },
        {
            name: 'pony3',
            img: 'img/pony3.png'
        },
        {
            name: 'pony4',
            img: 'img/pony4.png'
        },
        {
            name: 'pony4',
            img: 'img/pony4.png'
        },
        {
            name: 'pony5',
            img: 'img/pony5.png'
        },
        {
            name: 'pony5',
            img: 'img/pony5.png'
        },
        {
            name: 'pony6',
            img: 'img/pony6.png'
        },
        {
            name: 'pony6',
            img: 'img/pony6.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'img/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    function checkForMatch() {

        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {

            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'img/white.png')
            cards[optionTwoId].setAttribute('src', 'img/white.png')
            cardsWon.push(cardsChosen)

        } else {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations, you found them all!';
        }
    }

    function flipCard() {

        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

















})