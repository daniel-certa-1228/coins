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

    
    if (dollarNoDec >= 25) {
        //if whole number can be divided by 25, do it, round the remainder down and store in a variable
        numberOfQuarters = Math.floor(dollarNoDec/25);
        //set the number of quarters in the coinpurse object
        coinPurse.quarters = numberOfQuarters;
        //calculate the remainder and store in a variable
        remainder25 = dollarNoDec -(numberOfQuarters * 25);
        //reset dollerNoDec amount for the next section.
        dollarNoDec = dollarNoDec - remainder25

      }  else {
        //if dollarNoDec is not greater than or equal to 25, set num of quarters to 0 and move on
        numberOfQuarters = 0;
        coinPurse.quarters = numberOfQuarters;

      }
    
    if (dollarNoDec >= 10) {
        //if whole number can be divided by 10, do it, round the remainder down and store in a variable
        numberofDimes = Math.floor(dollarNoDec/10);
        //set the number of dimes in the coinpurse object
        coinPurse.dimes = numberofDimes;
        //calculate the remainder and store in a variable
        remainder10 = dollarNoDec - (numberofDimes * 10);
        //reset dollerNoDec amount for the next section.
        dollarNoDec = dollarNoDec - remainder10
      
      }  else {
        //if dollarNoDec is not greater than or equal to 10, set num of dimes to 0 and move on
        numberofDimes = 0;
        coinPurse.dimes = numberofDimes;

      }
    
    if (dollarNoDec >= 5) {
        //if whole number can be divided by 5, do it, round the remainder down and store in a variable
        numberOfNickels = Math.floor(dollarNoDec/5);
        //set the number of nickels in the coinpurse object
        coinPurse.nickels = numberOfNickels;
        //calculate the remainder and store in a variable
        remainder5 = dollarNoDec - (numberOfNickels * 5);
        //reset dollerNoDec amount for the next section.
        dollarNoDec = dollarNoDec - remainder5;

      } else {
        //if dollarNoDec is not greater than or equal to 10, set num of dimes to 0 and move on
        numberOfNickels = 0;
        coinPurse.nickels = numberOfNickels;

      }
    
    if (dollarNoDec >= 1) {
        //if whole number can be divided by 1, do it, round the remainder down and store in a variable
        numberOfPennies = Math.floor(dollarNoDec/1);
        //set the number of pennies in the coinpurse object
        coinPurse.pennies = numberOfPennies;
        //calculate the remainder and store in a variable
        remainder1 = dollarNoDec - (numberOfPennies * 1);
        //reset dollerNoDec amount for the next section.
        dollarNoDec = dollarNoDec - remainder1;
    } else {
        //if dollarNoDec is not greater than or equal to 10, set num of dimes to 0 and move on
        numberOfPennies = 0;
        coinPurse.pennies = numberOfPennies;
    }
    //break the loop!
    break
  }

  return coinPurse;
}

var coins = coinCounter(2.00)
console.log(coins);

