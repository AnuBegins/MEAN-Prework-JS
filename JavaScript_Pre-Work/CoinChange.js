
// Coin Change
// Objectives:
// Write a function that creates and returns an object.
// Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.

// Example: coinChange(312) returns 

// {dollars: 3, dimes: 1, pennies: 2}
// Example: coinChange(78) returns 

// {quarters: 3, pennies: 3}


function coinChange(n) {
    var cents = [100, 25, 10, 5, 1];
    var denomination = ["dollars", "quarters", "dimes", "nickels", "pennies"];
    var dict = {};

    for (var i = 0; i < cents.length; i ++) {
        var quotient = Math.floor (n/cents[i]);
        dict[denomination[i]] = quotient;
        var remainder = n % cents[i];
        n = remainder;
    }
    return dict;

}

console.log(coinChange(312));
