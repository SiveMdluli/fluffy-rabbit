document.addEventListener('DOMContentLoaded', () => {
//mY CARD OPTIONS FOR MATCHING
const myCardArray = [

    {
      name: 'fries',
      img: 'images/fries.png'
    },

    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },

    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },

    {
      name: 'pizza',
      img: 'images/pizza.png'
    },

    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },

    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },

    {
        name: 'fries',
        img: 'images/fries.png'
      },
  
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
  
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
  
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
  
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
  
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },

]

// console.log(myCardArray)
myCardArray.sort(() => 0.5 - Math.random())

//Using QS to pick up Ids from my HTML Doc
const gridDsiplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')


let chosenCards = []//Clicked cards will be stored here n then matched in a function
let chosenCardsIds =[]
const wonCards = []


function createBoard () {
    for (let i = 0; i < myCardArray.length; i++) {
        const card = document.createElement('img')

        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        console.log(card, i)
        gridDsiplay.appendChild(card)

    }
}
createBoard()


function checkMatch() {
    const cards = document.querySelectorAll('#grid img')

    const optionOneId = chosenCardsIds[0]
    const optionTwoId = chosenCardsIds[1]

    console.log(cards)
    console.log('checking a match!')

    //Clicking on the same card and finding a match
    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same Image Twice!')
    }


    if(chosenCards[0] == chosenCards[1]) {
        // targrting the indexes in the newly created array when pushing
        alert('Matches!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        //Add White IMG; then remove eventListenr on click on the flicp card
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)

        wonCards.push(chosenCards)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Not Quite, try again!')
    }

    resultDisplay.textContent = wonCards.length
//resetting after Two clicks, match or not
    chosenCards = []
    chosenCardsIds = []

    if(wonCards.length ==myCardArray.length/2){
        resultDisplay.textContent = 'Congradulations, You Matched them All!!!'


    }

}


function flipCard() {

    console.log(myCardArray)
    const cardId = this.getAttribute('data-id')//targeting any element we click"this"
    chosenCards.push(myCardArray[cardId].name)
    chosenCardsIds.push(cardId)//using this to store the cardIDs in the empty array for later use(matching)

    // console.log(myCardArray[cardId].name)//checking if it lives in this array for matching it later
    console.log('clicked', cardId);//checking on console
    console.log(chosenCards)
    this.setAttribute('src', myCardArray[cardId].img)

    //Event Checkig IF statement
    if (chosenCards.length === 2) {
        setTimeout( checkMatch, 400)
    }
}


})