
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

let playerCurrentRolledValue = document.getElementById('playerCurrentRolledValues')
let playerCurrentRoundScore = document.getElementById('playerCurrentRoundScore')
let playerTotalScore = document.getElementById('playerTotalScore')

let computerCurrentRolledValues = document.getElementById('computerCurrentRolledValues')
let computerCurrentRoundScore = document.getElementById('computerCurrentRoundScore')
let computerTotalScore = document.getElementById('computerTotalScore')

let playerCurrentRoundScoreInt;
let playerTotalScoreInt;

let computerCurrentRoundScoreInt;
let computerTotalScoreInt;


let rollCount = 0;
let playerDicesValue1;
let computerDicesValue1;


function startGame() {
    alert('Game started! Remember to click roll for a 4th time to see who won')
    if(rollCount > 0) {
        alert('Game has already started, If you want to Restart, click on the Reset button')
    }else{
        rollCount = 0;
    }
}

function rollDice() {
    console.log(rollCount)
    if (rollCount == 3){
        if (totalPlayerScore > totalComputerScore) {
            alert(`Congratulations! You won with a total score of ${totalPlayerScore} over the Computer's total score of ${totalComputerScore}`)
        }
        else if(totalComputerScore == totalPlayerScore){
            alert(`Tie! Both you and the computer had a total score of ${totalPlayerScore}`)
        }
        else{
            alert(`Game Over! You lost the Computer had a total score ${totalComputerScore} and you had a total score of${totalPlayerScore}`)
        }
        return
    }

    //Roll Player's dice
    let playerDice1 = player1dice1.roll()
    let playerDice2 = player1dice2.roll()

    //Roll Computer's dice
    let compDice1 = computerDice1.roll()
    let compDice2 = computerDice2.roll()

    if (player1dice1 == 1 || player1dice2 == 1){
        playerDicesValue1 == true;
    }

    if (compDice1 == 1 || compDice2 == 1){
        computerDicesValue1 == true;
    }

    //Check Player's Dice values
    console.log(`Player Dice 1: ${playerDice1}`)
    console.log(`Player Dice 2: ${playerDice2}`)


    //Show player's rolled Dice values
    playerCurrentRolledValue.innerHTML = `Player's rolled dices are: ${playerDice1} and ${playerDice2}`

    //Show computer's rolled dices values
    computerCurrentRolledValues.innerHTML = `Computer's rolled dices are: ${compDice1} and ${compDice2}`
    
    //Check Computer's Dice values
    console.log(`Computer Dice 1: ${compDice1}`)
    console.log(`Computer Dice 2: ${compDice2}`)

    //Check if any of the Player's dices have a value of 1
    if(playerDice1 == 1 || playerDice2 == 1 && (compDice1 != 1 && compDice2 != 1)){

        console.log(`We are in condition 1!`)
        playerCurrentRoundScoreInt = 0;
        totalPlayerScore += playerCurrentRoundScoreInt;

        computerCurrentRoundScoreInt = compDice1 + compDice2;
        totalComputerScore += computerCurrentRoundScoreInt;

        console.log(`The total Player's score is: ${totalPlayerScore}`)

        playerCurrentRoundScore.innerHTML = `Player's current round score: ${playerCurrentRoundScoreInt}`
        playerTotalScore.innerHTML = `Player's total score: ${totalPlayerScore}`

        console.log(`The total Computer's score is: ${totalComputerScore}`)

        computerCurrentRoundScore.innerHTML = `Computer's current round score: ${computerCurrentRoundScoreInt}`
        computerTotalScore.innerHTML = `Computer's total score: ${totalComputerScore}`

        rollCount += 1
        return
    } 

    //Check if any of the Computer's dices have a value of 1
    if(compDice1 == 1 || compDice2 == 1 && (player1dice1 != 1 && player1dice2 != 1)){

        console.log(`We are in condition 2!`)
        computerCurrentRoundScoreInt = 0;
        totalComputerScore += computerCurrentRoundScoreInt;

        playerCurrentRoundScoreInt = playerDice1 + playerDice2;
        totalPlayerScore += playerCurrentRoundScoreInt

        console.log(`The total Player's score is: ${totalPlayerScore}`)
        playerCurrentRoundScore.innerHTML = `Player's current round score: ${playerCurrentRoundScoreInt}`
        playerTotalScore.innerHTML = `Player's total score: ${totalPlayerScore}`

        console.log(`The total Computer's score is: ${totalComputerScore}`)
        computerCurrentRoundScore.innerHTML = `Computer's current round score: ${computerCurrentRoundScoreInt}`
        computerTotalScore.innerHTML = `Computer's total score: ${totalComputerScore}`

        
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
        playerCurrentRoundScoreInt = 0;
        totalPlayerScore += playerCurrentRoundScoreInt;

        computerCurrentRoundScoreInt = 0;
        totalComputerScore += computerCurrentRoundScoreInt;

        console.log(`The total Player's score is: ${totalPlayerScore}`)
        playerCurrentRoundScore.innerHTML = `Player's current round score: ${playerCurrentRoundScoreInt}`
        playerTotalScore.innerHTML = `Player's total score: ${totalPlayerScore}`

        console.log(`The total Computer's score is: ${totalComputerScore}`)
        computerCurrentRoundScore.innerHTML = `Computer's current round score: ${computerCurrentRoundScoreInt}`
        computerTotalScore.innerHTML = `Computer's total score: ${totalComputerScore}`


        rollCount += 1
        return
    }

    else{

        playerCurrentRoundScoreInt = 0;
        playerCurrentRoundScoreInt = playerDice1 + playerDice2;
        totalPlayerScore += playerCurrentRoundScoreInt

        computerCurrentRoundScoreInt = 0;
        computerCurrentRoundScoreInt = compDice1 + compDice2;
        totalComputerScore += computerCurrentRoundScoreInt;

        console.log(`The total Player's score is: ${totalPlayerScore}`)
        playerCurrentRoundScore.innerHTML = `Player's current round score: ${playerCurrentRoundScoreInt}`
        playerTotalScore.innerHTML = `Player's total score: ${totalPlayerScore}`        

        console.log(`The total Computer's score is: ${totalComputerScore}`)
        computerCurrentRoundScore.innerHTML = `Computer's current round score: ${computerCurrentRoundScoreInt}`
        computerTotalScore.innerHTML = `Computer's total score: ${totalComputerScore}`
    }
    

    rollCount += 1
}


// the problem im facing right now is figuring out the logic for updating the total values for both player and computer
// if any of their dice values are 1. I am having trouble with updating the values correctly if the dice value is 1. 
// As if rightg now i am using if blocks to check if their is a value of 1 for any of the dices. so if player has a dice 
//value of 1 the current round score is 0; but the problem is updating the other one without updating the total that should be 
// 0