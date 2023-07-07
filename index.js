let messageEl = document.querySelector("#message-el")
messageEl.textContent = "Want to play a round?"


let cards=[]//array

let sumEl = document.querySelector("#sum-el")
let sum = 0

let cardsEl = document.querySelector("#cards-el")

let message = ""

let isAlive = true
let hasBlackjack = false

let playerEl = document.querySelector("#player-el")

let player = {
    name: "per",
    chips: 145
}

playerEl.textContent = player.name + ": $" + player.chips

function startGame(){  
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: "+sum
    cardsEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i]+" "
    }
    if(sum<=20){
        
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "wohoo you have got blackjack!"
        blackjack = true
    }
    else{
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive == true && hasBlackjack == false){
        let newCard = getRandomNumber()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
    
}

function getRandomNumber(){
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if(randomNumber>10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    return randomNumber
}
