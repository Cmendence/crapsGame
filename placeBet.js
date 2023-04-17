
//FOUR

function placeBetFourPayoff(bet) {
    let payoff = ((bet / 5) * 9);
    console.log(`paying bet: $${bet} on the 4 amount: $${payoff}`);
    return payoff;
}

function isFourBetValid(bet) {
    console.log(`isFourBetValid checked for proper bet: ${bet} on the 4`);
    if (bet >= 5, bet % 5 === 0) {
        document.getElementById('four-invalid').textContent='';
        return true;
    } else {
        document.getElementById('four-invalid').textContent= closestProperFourBet(bet);
        return false;
    }
}


function closestProperFourBet(bet) {
    let closestBet = Math.round(bet / 5)* 5;
    return `${bet} is not proper for the 4. Nearest proper bet is ${closestBet}`;
}


//FIVE

function placeBetFivePayoff(bet) {
    let payoff = ((bet / 5) * 7);
    console.log(`paying bet: $${bet} on the 5 amount: $${payoff}`);
    return payoff;
}

function isFiveBetValid(bet) {
    console.log(`isFiveBetValid checked for proper bet: ${bet} on the 5`);
    if (bet >= 5, bet % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

function closestProperFiveBet(bet) {
    let closestBet = Math.round(bet / 5)* 5;
    return `${bet} is not proper for the 5. Nearest proper bet is ${closestBet}`;
}

//SIX

function placeBetSixPayoff(bet) {
    let payoff = ((bet / 6) * 7);
    console.log(`paying bet: $${bet} on the 6 amount: $${payoff}`);
    return payoff;
}


function isSixBetValid(bet) {
    console.log(`isSixBetValid checked bet value:${bet} for validity`)
    if (bet >= 6, bet % 6 === 0) {
        document.getElementById('six-invalid').textContent='';

        return true;
    } else {
        document.getElementById('six-invalid').textContent= closestProperSixBet(bet);
        return false;
    }
    }

function closestProperSixBet(bet) {
    let closestBet = Math.round(bet / 6)*6;
        return `${bet} is not proper for the 6. Nearest proper bet is ${closestBet}`;
    }

//EIGHT

function placeBetEightPayoff(bet) {
    let payoff = ((bet / 6) * 7);
    console.log(`paying bet: $${bet} on the 8 amount: $${payoff}`);
    return payoff;
}

function isEightBetValid(bet) {
    console.log(`isEightValid checked bet value:${bet} for validity`)
    if (bet >= 6, bet % 6 === 0) {
        document.getElementById('eight-invalid').textContent='';
        return true;
    } else {
        document.getElementById('eight-invalid').textContent= closestProperEightBet(bet);
        return false;
    }
    }

function closestProperEightBet(bet) {
        let closestBet = Math.round(bet / 6)*6;
        return `${bet} is not proper for the 8. Nearest proper bet is ${closestBet}`;
    }


//NINE

function placeBetNinePayoff(bet) {
    let payoff = ((bet / 5) * 7);
    console.log(`paying bet: $${bet} on the 9 amount: $${payoff}`);
    return payoff;
}

function isNineBetValid(bet) {
    console.log(`isNineBetValid checked for proper bet: ${bet} on the 9`);
    if (bet >= 5, bet % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

function closestProperNineBet(bet) {
    let closestBet = Math.round(bet / 5)* 5;
    return `${bet} is not proper for the 9. Nearest proper bet is ${closestBet}`;
}

//TEN

function placeBetTenPayoff(bet) {
    let payoff = ((bet / 5) * 9);
    console.log(`paying bet: $${bet} 10 amount: $${payoff}`);
    return payoff;
}

function isTenBetValid(bet) {
    console.log(`isTenBetValid checked for proper bet: ${bet} on the 10`);
    if (bet >= 5, bet % 5 === 0) {
        return true;
    } else {
        return false;
    }
}


function closestProperTenBet(bet) {
    let closestBet = Math.round(bet / 5)* 5;
    return `${bet} is not proper for the 10. Nearest proper bet is ${closestBet}`;
}


//     function areOutsideNumbersValid(bet) {
//         console.log(`areOutsideNumbersValid checked for proper bet: ${bet} on the numbers 4,5,9,10`);
//         if (bet >= 5, bet % 5 === 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }

function isFieldValid(inputId, inputErrorId) {
    let input = document.getElementById(inputId).value;
    let inputError = document.getElementById(inputErrorId);
   
    if (input === '') {
     document.getElementById(inputId).classList.add('is-invalid');
        inputError.textContent = 'Please enter a number';
        console.log(`added class 'is-invalid to input id:${inputId}`)
       return false;
     } else {
         document.getElementById(inputId).classList.remove('is-invalid');
       inputError.textContent = '';
       console.log(`added class 'is-valid to input id:${inputId}`)
     return true
     }
 }
//BUTTONS

//FOUR
    document.getElementById('place-four-btn').addEventListener('click', ()=> {
        console.log('button 4 is working');
        let bet = document.getElementById('place-four').value;
        let fieldValid = isFieldValid('place-four', 'empty-field-four');
        let fourValid = isFourBetValid(bet);

        if(fourValid && fieldValid){
                placeBetFourPayoff(bet);
            }

        document.getElementById('place-four').value='';
        document.getElementById('place-four').focus();
    });


//FIVE
    document.getElementById('place-five-btn').addEventListener('click', ()=> {
        console.log('button 5 is working');


        document.getElementById('place-five').value='';
        document.getElementById('place-five').focus();

    });


//SIX
    document.getElementById('place-six-btn').addEventListener('click', ()=> {
        console.log('button 6 is working');
        let bet = document.getElementById('place-six').value;
        if(isSixBetValid(bet)){
            placeBetSixPayoff(bet);
        }
        document.getElementById('place-six').value='';
        document.getElementById('place-six').focus();

    });


//EIGHT    
    document.getElementById('place-eight-btn').addEventListener('click', ()=> {
        console.log('button 8 is working');
        let bet = document.getElementById('place-eight').value;

        if(isEightBetValid(bet)){
            placeBetEightPayoff(bet);
        }


        document.getElementById('place-eight').value='';
        document.getElementById('place-eight').focus();

    });


//NINE    
    document.getElementById('place-nine-btn').addEventListener('click', ()=> {
        console.log('button 9 is working');



        document.getElementById('place-nine').value='';
        document.getElementById('place-nine').focus();

    });


//TEN    
    document.getElementById('place-ten-btn').addEventListener('click', ()=> {
        console.log('button 10 is working');

        document.getElementById('place-ten').value='';
        document.getElementById('place-ten').focus();

    });