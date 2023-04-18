
//FOUR

function placeBetFourPayoff(bet) {
    let payoff = ((bet / 5) * 9);
    document.getElementById('payoff-four').textContent=`Bet! $${bet} pays $${payoff}`;

    console.log(`paying bet: $${bet} on the 4 amount: $${payoff}`);
}

function isFourBetValid(bet) {
    console.log(`isFourBetValid checked for proper bet: ${bet} on the 4`);
    if (bet >= 5, bet % 5 === 0) {
        document.getElementById('four-invalid').textContent='';
        return true;
    } else {
        document.getElementById('place-four').classList.add('is-invalid');
        document.getElementById('four-invalid').textContent= closestBetOutsideNums(bet);
        return false;
    }
}





//FIVE

function placeBetFivePayoff(bet) {
    let payoff = ((bet / 5) * 7);
    document.getElementById('payoff-five').textContent=`Bet! $${bet} pays $${payoff}`;
    console.log(`paying bet: $${bet} on the 5 amount: $${payoff}`);
}

function isFiveBetValid(bet) {
    console.log(`isFiveBetValid checked for proper bet: ${bet} on the 5`);
    if (bet >= 5, bet % 5 === 0) {
        document.getElementById('five-invalid').textContent='';
        return true;
    } else {
        document.getElementById('place-five').classList.add('is-invalid');
        document.getElementById('five-invalid').textContent= closestBetOutsideNums(bet);
        return false;
    }
}

//SIX

function placeBetSixPayoff(bet) {
    let payoff = ((bet / 6) * 7);
    document.getElementById('payoff-six').textContent=`Bet! $${bet} pays $${payoff}`;

    console.log(`paying bet: $${bet} on the 6 amount: $${payoff}`);
}


function isSixBetValid(bet) {
    console.log(`isSixBetValid checked bet value:${bet} for validity`)
    if (bet >= 6, bet % 6 === 0) {
        document.getElementById('six-invalid').textContent='';

        return true;
    } else {
        document.getElementById('place-six').classList.add('is-invalid');
        document.getElementById('six-invalid').textContent= closestSixEightBet(bet);
        return false;
    }
    }

//EIGHT

function placeBetEightPayoff(bet) {
    let payoff = ((bet / 6) * 7);
    document.getElementById('payoff-eight').textContent=`Bet! $${bet} pays $${payoff}`;
    console.log(`paying bet: $${bet} on the 8 amount: $${payoff}`);

}

function isEightBetValid(bet) {
    console.log(`isEightValid checked bet value:${bet} for validity`)
    if (bet >= 6, bet % 6 === 0) {
        document.getElementById('eight-invalid').textContent='';
        return true;
    } else {
        document.getElementById('place-eight').classList.add('is-invalid');
        document.getElementById('eight-invalid').textContent= closestSixEightBet(bet);
        return false;
    }
    }

function closestProperEightBet(bet) {
        let closestBet = Math.round(bet / 6)*6;
        return `${bet} is not a proper bet. Nearest proper bet is ${closestBet}`;
    }


//NINE

function placeBetNinePayoff(bet) {
    let payoff = ((bet / 5) * 7);
    document.getElementById('payoff-nine').textContent=`Bet! $${bet} pays $${payoff}`;

    console.log(`paying bet: $${bet} on the 9 amount: $${payoff}`);
}

function isNineBetValid(bet) {
    console.log(`isNineBetValid checked for proper bet: ${bet} on the 9`);
    if (bet >= 5, bet % 5 === 0) {
        document.getElementById('nine-invalid').textContent='';

        return true;
    } else {
        document.getElementById('place-nine').classList.add('is-invalid');
        document.getElementById('nine-invalid').textContent= closestBetOutsideNums(bet);
        return false;
    }
}

//TEN

function placeBetTenPayoff(bet) {
    let payoff = ((bet / 5) * 9);
    document.getElementById('payoff-ten').textContent=`Bet! $${bet} pays $${payoff}`;

    console.log(`paying bet: $${bet} 10 amount: $${payoff}`);
    return payoff;
}

function isTenBetValid(bet) {
    console.log(`isTenBetValid checked for proper bet: ${bet} on the 10`);
    if (bet >= 5, bet % 5 === 0) {
        document.getElementById('ten-invalid').textContent='';
        return true;
    } else {
        document.getElementById('place-ten').classList.add('is-invalid');
        document.getElementById('ten-invalid').textContent= closestBetOutsideNums(bet);
        return false;
    }
}


function closestBetOutsideNums(bet) {
    let closestBet = Math.round(bet / 5)* 5;
    return `${bet} is not a proper bet. Nearest proper bet is ${closestBet}`;
}

function closestSixEightBet(bet) {
    let closestBet = Math.round(bet / 6)*6;
    return `${bet} is not a proper bet. Nearest proper bet is ${closestBet}`;
}


//VALIDATION

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
       console.log(`removed class 'is-invalid to input id:${inputId}`)
     return true
     }
 }


 function clearFields(){
    document.getElementById('payoff-four').textContent='';
    document.getElementById('payoff-five').textContent='';
    document.getElementById('payoff-six').textContent='';
    document.getElementById('payoff-eight').textContent='';
    document.getElementById('payoff-nine').textContent='';
    document.getElementById('payoff-ten').textContent='';

    document.getElementById('four-invalid').textContent='';
    document.getElementById('five-invalid').textContent='';
    document.getElementById('six-invalid').textContent='';
    document.getElementById('eight-invalid').textContent='';
    document.getElementById('nine-invalid').textContent='';
    document.getElementById('ten-invalid').textContent='';

    document.getElementById('empty-field-four').textContent='';
    document.getElementById('empty-field-five').textContent='';
    document.getElementById('empty-field-six').textContent='';
    document.getElementById('empty-field-eight').textContent='';
    document.getElementById('empty-field-nine').textContent='';
    document.getElementById('empty-field-ten').textContent='';
    
    document.getElementById('place-four').classList.remove('is-invalid');
    document.getElementById('place-five').classList.remove('is-invalid');
    document.getElementById('place-six').classList.remove('is-invalid');
    document.getElementById('place-eight').classList.remove('is-invalid');
    document.getElementById('place-nine').classList.remove('is-invalid');
    document.getElementById('place-ten').classList.remove('is-invalid');
 }


//BUTTONS

//FOUR
    document.getElementById('place-four-btn').addEventListener('click', ()=> {
        let bet = document.getElementById('place-four').value;
        let fieldValid = isFieldValid('place-four', 'empty-field-four');
        let fourValid = isFourBetValid(bet);

        if(fourValid && fieldValid){
            clearFields();
            placeBetFourPayoff(bet);
            }

        document.getElementById('place-four').value='';
        document.getElementById('place-four').focus();
    });


//FIVE
    document.getElementById('place-five-btn').addEventListener('click', ()=> {
        let bet = document.getElementById('place-five').value;
        let fieldValid = isFieldValid('place-five', 'empty-field-five');
        let fiveValid = isFiveBetValid(bet);

        if(fiveValid && fieldValid){
            clearFields()
            placeBetFivePayoff(bet)

        }

        document.getElementById('place-five').value='';
        document.getElementById('place-five').focus();

    });


//SIX
    document.getElementById('place-six-btn').addEventListener('click', ()=> {
        let bet = document.getElementById('place-six').value;
        let fieldValid = isFieldValid('place-six', 'empty-field-six');
        let sixValid = isSixBetValid(bet);

        if(sixValid && fieldValid){
            clearFields()
            placeBetSixPayoff(bet);
        }

        document.getElementById('place-six').value='';
        document.getElementById('place-six').focus();

    });


//EIGHT    
    document.getElementById('place-eight-btn').addEventListener('click', ()=> {
        let bet = document.getElementById('place-eight').value;
        let fieldValid = isFieldValid('place-eight', 'empty-field-eight');
        let eightValid = isEightBetValid(bet);

        if (eightValid && fieldValid) {
            clearFields()
            placeBetEightPayoff(bet);
        }
  

        document.getElementById('place-eight').value='';
        document.getElementById('place-eight').focus();

    });


//NINE    
    document.getElementById('place-nine-btn').addEventListener('click', ()=> {
        let bet = document.getElementById('place-nine').value;
        let fieldValid = isFieldValid('place-nine', 'empty-field-nine');
        let nineValid = isNineBetValid(bet);

        if(nineValid && fieldValid) {
            clearFields()
            placeBetNinePayoff(bet);
        }

        document.getElementById('place-nine').value='';
        document.getElementById('place-nine').focus();

    });


//TEN    
    document.getElementById('place-ten-btn').addEventListener('click', ()=> {
        let bet = document.getElementById('place-ten').value;
        let fieldValid = isFieldValid('place-ten', 'empty-field-ten');
        let tenValid = isTenBetValid(bet);

        if (tenValid && fieldValid) {
            clearFields()
            placeBetTenPayoff(bet);
        }

        document.getElementById('place-ten').value='';
        document.getElementById('place-ten').focus();

    });