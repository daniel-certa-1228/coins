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
  console.log( "dollarNoDec", dollarNoDec );

  while (dollarNoDec !== 0) {

    //if whole number can be divided by 25, do it, round the remainder down and store in a variable
    if (dollarNoDec >= 25) {

        numberOfQuarters = Math.floor(dollarNoDec/25);
        console.log( "numberOfQuarters", numberOfQuarters );
        coinPurse.quarters = numberOfQuarters;
        remainder25 = dollarNoDec -(numberOfQuarters * 25);
        console.log( "remainder25", remainder25 );
        dollarNoDec -= (numberOfQuarters * 25);
        console.log( "dollarNoDec", dollarNoDec );


      }  else {

        numberOfQuarters = 0;
        coinPurse.quarters = numberOfQuarters;

      }
    
    if (dollarNoDec >= 10) {

        numberofDimes = Math.floor(dollarNoDec/10);
        console.log( "numberofDimes", numberofDimes );
        coinPurse.dimes = numberofDimes;
        remainder10 = dollarNoDec - (numberofDimes * 10);
        console.log( "remainder10", remainder10 );
        dollarNoDec -= (numberofDimes * 10);
        console.log( "dollarNoDec", dollarNoDec );

      } else {

        numberofDimes = 0;
        coinPurse.dimes = numberofDimes;

      }
    
    if (dollarNoDec >= 5) {

        numberOfNickels = Math.floor(dollarNoDec/5);
        console.log( "numberOfNickels", numberOfNickels );
        coinPurse.nickels = numberOfNickels;
        remainder5 = dollarNoDec - (numberOfNickels * 5);
        console.log( "remainder5", remainder5 );
        dollarNoDec -= (numberOfNickels * 5);

      } else {

        numberOfNickels = 0;
        coinPurse.nickels = numberOfNickels;

      }
    
    if (dollarNoDec >= 1) {
        numberOfPennies = Math.floor(dollarNoDec/1);
        coinPurse.pennies = numberOfPennies;
        remainder1 = dollarNoDec - (numberOfPennies * 1);
        dollarNoDec -= (numberOfNickels * 1);
    } else {

        numberOfPennies = 0;
        coinPurse.pennies = numberOfPennies;
    }
    //break the loop!
    dollarNoDec = remainder1;
  }

  return coinPurse;
}

var coins = coinCounter(.67)
console.log(coins);

