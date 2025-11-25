
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

function rollAllDices() {

}

const totalPlayerScore = 0;
const totalComputerScore = 0;

let player1dice1 = new Dice(1, 6);
let player1dice2 = new Dice(1, 6);

let computerDice1 = new Dice(1, 6);
let computerDice2 = new Dice(1, 6);



function startGame() {
    console.log('Hello')

    let player1stRoll = player1dice1.roll()
    console.log('Player 1st Dice is: ' + player1stRoll)

    let player2ndRoll = player1dice2.roll()
    console.log(`Player 2nd Dice is: ${player2ndRoll}`)

    let computer1stRoll = computerDice1.roll()
    console.log(`Player 2nd Dice is: ${computer1stRoll}`)

    let computer2ndRoll = computerDice1.roll()
    console.log(`Player 2nd Dice is: ${computer2ndRoll}`)
}