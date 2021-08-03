
let sum = 0;
let cards = []
// console.log(sum);
playerName = window.prompt("Enter your name : ")
let player = {
     name : playerName,

}
let playerEl = document.getElementById('player-el');
playerEl.textContent = "Hi " + player.name + "!" 
let hasBlackJack = false;
let isAlive = false;
let message = "";
let result = document.getElementById('message-el');
// let sumEl = document.getElementById('sum-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document
.querySelector('#cards-el');
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();  
    let secondCard = getRandomCard();  
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame();
}

function getRandomCard(){
    n = Math.floor(Math.random() * 13) + 1;
    if(n === 1){
        return 11;
    }else if(n > 10){
        return 10;
    }else{    
        return n;
    }
}
function renderGame(){
    sumEl.textContent = "Sum : " + sum;
    cardsEl.textContent = "Cards : "
    for(i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ' , '
    }
    if (sum < 21){
        result.textContent =  'Do you want to draw a new card?'
    }
    else if(sum === 21){
        result.textContent = 'You have got a black jack'
        hasBlackJack = true;
    }
    else {
        result.textContent =  "You are out of the game"
        isAlive = false;
    }
    
    //Cash Out!!
    console.log(message)
}
function newCard(){
    if(isAlive == true && hasBlackJack == false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }
    else if(isAlive == false || hasBlackJack == true){
        alert("The game is over! Click 'Start' to start a new game")
    }
}



    
