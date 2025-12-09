
//Dice object
class Dice {
    constructor(minValue, maxValue) {
        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    roll() {
        return Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
    }
}

//Testing Dice object roll method
const d6 = new Dice(1, 6);
console.log("Rolling a 6-sided die:");
console.log(d6.roll());


let totalPlayerScore = 0;
let totalComputerScore = 0;

let player1dice1 = new Dice(1, 6);
let player1dice2 = new Dice(1, 6);

let computerDice1 = new Dice(1, 6);
let computerDice2 = new Dice(1, 6);

let playerCurrentRolledValue


let rollCount = 0;


function startGame() {
    console.log('Game started!')
    if(rollCount > 0) {
        alert('Game has already started, If you want to Restart, click on the Reset button')
    }else{
        rollCount = 0;
    }
}

function rollDice() {
    console.log(rollCount)
    if (rollCount == 3){
        alert("Game Over! If you would like to play again please click the Reset Button")
        return
    }

    let playerCurrentRoundScore;
    let computerCurrentRoundScore;
    let playerDicesValue1;
    let computerDicesValue1;


    //Roll Player's dice
    let playerDice1 = player1dice1.roll()
    let playerDice2 = player1dice2.roll()

    if (player1dice1 == 1 || player1dice2 == 1){
        playerDicesValue1 == true;
    }

    //Check Player's Dice values
    console.log(`Player Dice 1: ${playerDice1}`)
    console.log(`Player Dice 2: ${playerDice2}`)

    //Roll Computer's dice
    let compDice1 = computerDice1.roll()
    let compDice2 = computerDice2.roll()

    if (compDice1 == 1 || compDice2 == 1){
        computerDicesValue1 == true;
    }
    
    //Check Computer's Dice values
    console.log(`Computer Dice 1: ${compDice1}`)
    console.log(`Computer Dice 2: ${compDice2}`)

    //Check if any of the Player's dices have a value of 1
    if(playerDice1 == 1 || playerDice2 == 1 && (compDice1 != 1 && compDice2 != 1)){

        console.log(`We are in condition 1!`)
        playerCurrentRoundScore = 0;
        totalPlayerScore += playerCurrentRoundScore;

        computerCurrentRoundScore = compDice1 + compDice2;
        totalComputerScore += computerCurrentRoundScore;

        console.log(`The total Player's score is: ${totalPlayerScore}`)
        console.log(`The total Computer's score is: ${totalComputerScore}`)
        rollCount += 1
        return
    } 

    //Check if any of the Computer's dices have a value of 1
    if(compDice1 == 1 || compDice2 == 1 && (player1dice1 != 1 && player1dice2 != 1)){
        console.log(`We are in condition 2!`)
        computerCurrentRoundScore = 0;
        totalComputerScore += computerCurrentRoundScore;

        playerCurrentRoundScore = playerDice1 + playerDice2;
        totalPlayerScore += playerCurrentRoundScore

        console.log(`The total Player's score is: ${totalPlayerScore}`)
        console.log(`The total Computer's score is: ${totalComputerScore}`)
        rollCount += 1
        return
    }


    // playerCurrentRoundScore = playerDice1 + playerDice2;
    // computerCurrentRoundScore = compDice1 + compDice2;

    // totalPlayerScore += playerCurrentRoundScore;
    // totalComputerScore += computerCurrentRoundScore;
    // console.log(`The total player's score is: ${totalPlayerScore}`)
    // console.log(`The total player's score is: ${totalComputerScore}`)

    else if(compDice1 == 1 && compDice2 == 1 && playerDice1 == 1 && playerDice2 == 1){
        console.log(`We are in condition 3!`)
        playerCurrentRoundScore = 0;
        totalPlayerScore += playerCurrentRoundScore;

        computerCurrentRoundScore = 0;
        totalComputerScore += computerCurrentRoundScore;

        console.log(`The total Player's score is: ${totalPlayerScore}`)
        console.log(`The total Computer's score is: ${totalComputerScore}`)
        rollCount += 1
        return
    }

    else{

        playerCurrentRoundScore = playerDice1 + playerDice2;
        totalPlayerScore += playerCurrentRoundScore

        computerCurrentRoundScore = compDice1 + compDice2;
        totalComputerScore += computerCurrentRoundScore;

        console.log(`The total Player's score is: ${totalPlayerScore}`)
        console.log(`The total Computer's score is: ${totalComputerScore}`)
    }
    

    rollCount += 1
}


// the problem im facing right now is figuring out the logic for updating the total values for both player and computer
// if any of their dice values are 1. I am having trouble with updating the values correctly if the dice value is 1. 
// As if rightg now i am using if blocks to check if their is a value of 1 for any of the dices. so if player has a dice 
//value of 1 the current round score is 0; but the problem is updating the other one without updating the total that should be 
// 0