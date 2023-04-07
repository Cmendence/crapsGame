//rolling two 6 sided dice. pulling 1 number from each array

// die1Array = [1, 2, 3, 4, 5, 6];
// die2Array = [1, 2, 3, 4, 5, 6];


// rollResult = die1 + die2;

//rollCombo is the number on the individual dice/ the value of the element, 
//independent of the addition, not the total. ie die1 = 4 and die2 = 2.
//this is for
//rollCombo = ''

// if die1 === die2 and rollResult >=4 && rollResult <= 10  it's a Hardway. 
// maybe it's easier to just separate 2-2, 3-3, 4-4, 5-5, as a separate array?

// let randomValue = myArray[Math. floor(Math. random() * myArray


//This code always returns the same random integer from two separate arrays every time. 
//I'm looking for one random element two separate times.
//
// let random = Math.floor(Math.random() * die1Array.length);
// console.log(die1Array[random]);
// console.log(die2Array[random]);


/*
 For establishing a point, maybe create pointSet === false. if rollTotal = [4,5,6,8,9,10], point = rollTotal. change pointSet to true. 
if 7 rolls while pointSet is true, it's '7 out' and the game resets. if 7 rolls while pointSet is false, it's a 'frontline winner'
and the game continues, looking for a rollTotal that is in the array.
*/

const die1 = [1, 2, 3, 4, 5, 6];
const die2 = [1, 2, 3, 4, 5, 6];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const roll1 = die1[getRandomInt(die1.length)];
const roll2 = die2[getRandomInt(die2.length)];

console.log("Roll 1:", roll1);
console.log("Roll 2:", roll2);


console.log(`${roll1}, ${roll2}`);

rollTotal = (roll1 + roll2);

rollCombo = (`${roll1}, ${roll2}`);

console.log(rollCombo);


//trying to figure out how to set the point and call winner

let point = '';
let pointSet = false
let pointNumbers = [4, 5, 6, 8, 9, 10]
let num;
let payout = 0;
let balance = 0;


if (rollTotal === 7 && pointSet === false){
    console.log(rollCombo);
    console.log('SEVEN WINNER');
} else if (rollTotal === 7 && pointSet === true){
    pointSet = !pointSet
    console.log('SEVEN OUT SEVEN')
}

if (pointNumbers.includes(rollTotal)){
    point = rollTotal
    pointSet = true
    console.log(`${rollTotal}'s the point! Put the puck on the ${rollTotal}`)
}

if (point === rollTotal && pointSet === true){
    console.log(`WINNER ${point} ON THE FRONT LINE`);
}

// stick calls, check for hardways

if (rollTotal === 4){
    if (roll1 === roll2 && rollTotal === 4){
            console.log('4 Hard 4! Put on your tutu!');
        } else {
            console.log('4 easy 4 Lil Joe says hello!');
            }
        }
if (rollTotal === 5){
            console.log('5 No field 5! The 5 finger discount- free ninety-nine');
        }


const placeNums = [4,5,6,8,9,10];
function placeBet(bet, num){
    let payout = 0
    if (bet >=6 && bet % 6 === 0 && (num === 6 || num === 8)) {
        payout = (bet / 6) * 7;
        return `That's a bet! ${bet} on the ${num} pays ${payout}`;
    } else if (bet >=5 && bet % 5 === 0 && (num === 5 || num === 9)) {
        payout = (bet / 5) * 7;
        return `That's a bet! ${bet} on the ${num} pays ${payout}`;
    } else if (bet >=5 && bet % 5 === 0 && (num === 4 || num === 10)) {
        payout = (bet / 5) * 9
        return `That's a bet! ${bet} on the ${num} pays ${payout}`;
    } else if(!placeNums.includes(num)){
        return 'Invalid Number'
    } else {
        return 'No bet! Not a proper amount!';
    } 
        
    }


function placeBet(bet, num){
    if (bet >=6 && bet % 6 === 0 && num === 6) {
        return `That's a bet! ${bet} on the ${num} pays ${(bet / 6) * 7}`;
    } else if (bet >=6 && bet % 6 === 0 && num === 8) {
        return `That's a bet! ${bet} on the ${num} pays ${(bet / 6) * 7}`;
    } else if (bet >=5 && bet % 5 === 0 && num === 5) {
        return `That's a bet >=5 & bet! ${bet} on the ${num} pays ${(bet / 5) * 7}`;
    } else if (bet >=5 && bet % 5 === 0 && num === 9) {
        return `That's a bet >=5 & bet! ${bet} on the ${num} pays ${(bet / 5) * 7}`;
    } else if (bet >=5 && bet % 5 === 0 && num === 4) {
        return `That's a bet! ${bet} on the ${num} pays ${(bet / 5) * 9}`;
    } else if (bet >=5 && bet % 5 === 0 && num === 10) {
        return `That's a bet! ${bet} on the ${num} pays ${(bet / 5) * 9}`; 
    } else {
        return 'No bet! Not a proper amount!';
    }
}


function isSixOrEightValid(bet) {
    console.log(`isSixOrEightValid checked bet value:${bet} for validity`)
    if (bet >= 6, bet % 6 === 0) {
        return true;
    } else {
        return false;
    }
    }

    function areOutsideNumbersValid(bet, num) {
        console.log(`areOutsideNumbersValid checked for proper bet: ${bet} on the numbers 4,5,9,10`);
        if (bet >= 5, bet % 5 === 0) {
            return true;
        } else {
            return false;
        }
    }



function crapsPlaceBets(bet, num){

    switch(num){
        case 4:
            if(areOutsideNumbersValid(bet)){
              return placeBetFourTenPayoff(bet);
            } else {
                return closestProperOutsidePlaceBet(bet);
            }
        case 5:
            if(areOutsideNumbersValid(bet)) {
                return placeBetFiveNinePayoff(bet);
            } else {
                return closestProperOutsidePlaceBet(bet);
            }
        case 6:
            if(isSixOrEightValid(bet)) {
                return placeBetSixEightPayoff(bet);
            } else {
                return closestProperSixEightPlaceBet(bet)
            }
        case 8:
            if(isSixOrEightValid(bet)) {
                return placeBetSixEightPayoff(bet);
            } else {
                return closestProperSixEightPlaceBet(bet)
            }
        case 9:
            if(areOutsideNumbersValid(bet)) {
                return placeBetFiveNinePayoff(bet);
            } else {
                return closestProperOutsidePlaceBet(bet);
            }
        case 10:
            if(areOutsideNumbersValid(bet)){
               return placeBetFourTenPayoff(bet);
            } else {
                return closestProperOutsidePlaceBet(bet);
            }
        default: 
            return 'Invalid Number'
    }
    }

    

function placeBetFourTenPayoff(bet) {
    let payoff = ((bet / 5) * 9);
    console.log(`paying bet: $${bet} on the 4 or 10 amount: $${payoff}`);
    return payoff;
}

function placeBetFiveNinePayoff(bet) {
    let payoff = ((bet / 5) * 7);
    console.log(`paying bet: $${bet} on the 5 or 9 amount: $${payoff}`);
    return payoff;
}

function placeBetSixEightPayoff(bet) {
    let payoff = ((bet / 6) * 7);
    console.log(`paying bet: $${bet} on the 6 or 8 amount: $${payoff}`);
    return payoff;
}

function closestProperOutsidePlaceBet(bet) {
    let closestBet = Math.floor(bet / 5)* 5;
    console.log(`${bet} is not proper for outside numbers, would you like ${closestBet} instead?`)
    return closestBet;
}

function closestProperSixEightPlaceBet(bet) {
    let closestBet = Math.floor(bet / 6)*6
    console.log(`${bet} is not proper for 6 or 8, would you like ${closestBet} instead?`)
    return closestBet;

}

let fieldArr = [2, 3, 4, 9, 10, 11, 12];

// if (fieldArr.includes(rollTotal)){
//     if (rollTotal === 2 || rollTotal === 12){
//         return `${rollTotal}! crap ${rollTotal} Double in the bubble! ${bet} `
//     }
// }

//used in week 3 assignment
function placeSixOrEight(bet){
    if (bet >=6 && bet % 6 === 0){
        return `That's a bet! ${bet} pays ${(bet / 6) * 7}`;
    } else {
        return 'No bet! Improper amount!'
    }
}

crapsPlaceBets(270, 23)