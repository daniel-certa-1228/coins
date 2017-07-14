console.log( "coins.js" );

// Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

function coinCounter (dollarAmt) {
  //declare variables
  let remainder25 = 0;
  let remainder10 = 0;
  let remainder5 = 0;
  let remainder1 = 0;

  let numberOfQuarters = 0;
  let numberofDimes = 0;
  let numberOfNickels = 0;
  let numberOfPennies = 0;

  // Initialize a JavaScript object to hold the coins
  let coinPurse = {};
  
  //convert decimal amount to whole number
  let dollarNoDec = (dollarAmt * 100);

  while (dollarNoDec !== 0) {

    //if whole number can be divided by 25, do it, round the remainder down and store in a variable
    if (dollarNoDec >= 25) {
        numberOfQuarters = Math.floor(dollarNoDec/25);
        coinPurse.quarters = numberOfQuarters;
        remainder25 = dollarNoDec -(numberOfQuarters * 25);
      } 
    //if whole number can be divided by 10, do it, round the remainder down and store in a variable
    if (remainder25 >= 10) {
        numberofDimes = Math.floor(remainder25/10);
        coinPurse.dimes = numberofDimes;
        remainder10 = remainder25 - (numberofDimes * 10);
      }
    //if whole number can be divided by 5, do it, round the remainder down and store in a variable
    if (remainder10 >= 5) {
        numberOfNickels = Math.floor(remainder10/5);
        coinPurse.nickels = numberOfNickels;
        remainder5 = remainder10 - (numberOfNickels * 5);

    }
    //if whole number can be divided by 1, do it, round the remainder down and store in a variable
    if (remainder5 >= 1) {
      numberOfPennies = Math.floor(remainder5/1);
      coinPurse.pennies = numberOfPennies;
      remainder1 = remainder5 - (numberOfPennies * 1);
    }
    //break the loop!
    dollarNoDec = remainder1;
  }

  return coinPurse;
}

var coins = coinCounter(.67)
console.log(coins);

