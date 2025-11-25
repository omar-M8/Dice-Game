
const playerTotalScore = 0;
const computerTotalScore = 0;

//Dice object
export class Dice {
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
console.log(d6.roll());