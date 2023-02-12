//rolling two 6 sided dice. pulling 1 number from each array

die1Array = [1, 2, 3, 4, 5, 6];
die2Array = [1, 2, 3, 4, 5, 6];


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



let betSixOrEight = ''
let placeSixOrEight = ((betSixOrEight / 6) * 7);

if (betSixOrEight >=6 && betSixOrEight % 6 === 0){
    console.log(`That's a bet! ${betSixOrEight} pays ${placeSixOrEight}`);
} else {
    console.log('No bet! not a proper amount!');
}

// for 5 & 9

let placeFiveOrNine = ((bet / 5) * 7);


if (bet >=5 && bet % 5 === 0){
    console.log(`That's a bet! ${bet} pays ${placeFiveOrNine}`);
} else {
    console.log('No bet! not a proper amount!');
}

// for 4 & 10

let placeFourOrTen = ((bet / 5)* 9);

if (bet >= 5 && bet % 5 === 0){
    console.log(`That's a bet! ${bet} pays ${placeFourOrTen}`);
    if (bet >=20){
        console.log(`You should buy it! ${bet} would have paid ${bet * 2}!`);
    }
} else {
    console.log('No bet! not a proper amount!');
}

let fieldArray = [2, 3, 4, 9, 10, 11, 12];

